const {fetchTagsHistory, getEnv, shouldBeIgnored} = require('./utils')

/**
 * @param {Object} github Docs: <https://octokit.github.io/rest.js/v18>
 * @param {Object} context Docs: <https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts>
 * @param {Object} core Docs: <https://github.com/actions/toolkit/tree/main/packages/core>
 * @return {Promise<{include: Object[]}>}
 */
module.exports = async ({github, context, core}) => {
  const env = {
    sourceImage: getEnv('source-image'),
    targetImage: getEnv('target-image'),
  }

  if (env.sourceImage.length === 0) {
    throw new Error('Source image is not set. Set it using "env.source-image" key')
  } else if (env.targetImage.length === 0) {
    throw new Error('Target image is not set. Set it using "env.target-image" key')
  }

  core.info(`Source image: ${env.sourceImage}, target image: ${env.targetImage}`)

  /**
   * @param {{tag: string}} image
   * @return {boolean}
   */
  const tagsFilter = (image) => {
    return image.tag.endsWith('-alpine') // only alpine
      && /^\d+\.\d+[^.]+$/.test(image.tag) // only in MAJOR.MINOR format
  }

  const sourceTags = (await fetchTagsHistory(env.sourceImage, 40))
    .filter(tagsFilter) // the common filter
    .map(image => {
      image.arch.filter(arch => {
        const should = shouldBeIgnored(image.tag, arch)

        if (should === true) {
          core.info(`Architecture ${arch} for the tag ${image.tag} ignored (rule from the ignore-list)`)
        }

        return should
      })

      return image
    })
    .filter(image => {
      const ignore = image.arch.length === 0

      if (ignore) {
        core.notice(`Tag ${image.tag} ignored (it does not contain the architectures)`)
      }

      return !ignore
    })

  core.info(`${sourceTags.length} minor alpine-like tags were found for the ${env.sourceImage} image: ${sourceTags.map(i => i.tag).join(', ')}`)

  const targetTags = (await fetchTagsHistory(env.targetImage, 10)).filter(tagsFilter)

  core.info(`${targetTags.length} minor alpine-like tags were found for the ${env.targetImage} image: ${targetTags.map(i => i.tag).join(', ')}`)

  const diff = sourceTags.filter(sourceTag => {
    for (let i = 0; i < targetTags.length; i++) {
      if (targetTags[i].tag === sourceTag.tag) {
        if (targetTags[i].pushedAt.getTime() < sourceTag.pushedAt.getTime()) {
          core.info(`Plan to build the tag ${sourceTag.tag} due to updated timestamp (source tag is newer than target)`)

          return true
        }

        if (targetTags[i].arch.length !== sourceTag.arch.length) {
          core.info(`Plan to build the tag ${sourceTag.tag} due to new arch`)

          return true
        }

        core.notice(`The image tag ${sourceTag.tag} already exists and updated - skip it`)

        return false
      }
    }

    core.info(`Plan to build the tag ${sourceTag.tag}`)

    return true
  })

  /** @type {{include: {tag: string, platforms: string}[]}} */
  const matrix = {include: []}

  if (diff.length > 0) {
    core.notice(`Difference between ${env.targetImage} and ${env.sourceImage} tags is: ${diff.map(i => i.tag).join(', ')}`)

    matrix.include = diff.map(i => {
      return {tag: i.tag, platforms: i.arch.join(',')}
    })
  } else {
    core.warning('Nothing to do (difference was not found)')
  }

  if (matrix.include.length > 255) { // maximal matrix size is 256 jobs per run: <https://git.io/JKZDZ>
    core.notice(`Matrix size limited (was: ${matrix.include.length}, become: 255)`)

    matrix.include = matrix.include.slice(0, 255)
  }

  return matrix
}
