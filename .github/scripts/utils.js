const https = require('https')

/**
 * @param {string} uri
 * @param {number} wantStatusCode
 * @return {Promise<Buffer>}
 */
const httpGet = (uri, wantStatusCode = 200) => {
  return new Promise((resolve, reject) => {
    const request = https.request(uri, {
      method: 'GET',
      timeout: 10 * 1000, // milliseconds
    }, (response) => {
      if (response.statusCode !== wantStatusCode) {
        response.resume()

        return reject(new Error(`wrong response code from ${uri}: ${response.statusCode} (expected code is ${wantStatusCode})`))
      }

      const buf = []

      response
        .on('data', chunk => buf.push(chunk))
        .on('end', () => {
          resolve(Buffer.concat(buf))
        })
    })

    request.on('error', reject)

    request.end()
  })
}

/**
 * @param {string} imageName
 * @param {string} imageTag
 * @return {Promise<{tag: string, arch: string[], pushedAt: Date}>}
 */
const fetchImageTagInfo = (imageName, imageTag) => {
  return new Promise((resolve, reject) => {
    httpGet(`https://hub.docker.com/v2/repositories/${imageName}/tags/${imageTag}`) // default rate limit for the API calls is 600
      .then(buf => {
        /** @type {{
         *  images: {architecture: ?string, variant: ?string, os: ?string}[],
         *  last_updated: string,
         *  name: string
         * }} */
        const payload = JSON.parse(buf.toString())
        const arch = []

        payload.images.forEach(image => {
          arch.push([image.os, image.architecture, image.variant].filter(s => {
            return typeof s === 'string' && s !== ''
          }).join('/'))
        })

        resolve({
          tag: payload.name,
          arch: arch,
          pushedAt: new Date(Date.parse(payload.last_updated)),
        })
      })
      .catch(reject)
  })
}

/**
 * @param {string} imageName
 * @param {number} pagesLimit
 * @return {Promise<{tag: string, arch: string[], pushedAt: Date}[]>}
 */
const fetchTagsHistory = (imageName, pagesLimit = 5) => {
  return new Promise(async (resolve, reject) => {
    /** @type {{tag: string, arch: string[], pushedAt: Date}[]} */
    const tags = []

    for (let pageNumber = 1; pageNumber <= pagesLimit; pageNumber++) {
      let uri = `https://registry.hub.docker.com/v2/repositories/${imageName}/tags?page=${pageNumber}&page_size=100`

      const data = await httpGet(uri) // default rate limit for the Docker Hub API calls is 600
      /** @type {{
       *  count: number,
       *  next: ?string,
       *  previous: ?string,
       *  results: {images: {architecture: ?string, variant: ?string, os: ?string}[], last_updated: string, name: string}[]
       * }} */
      const payload = JSON.parse(data.toString())

      payload.results.forEach(result => {
        const arch = []

        result.images.forEach(image => {
          arch.push([image.os, image.architecture, image.variant].filter(s => {
            return typeof s === 'string' && s !== ''
          }).join('/'))
        })

        tags.push({
          tag: result.name,
          arch: arch,
          pushedAt: new Date(Date.parse(result.last_updated)),
        })
      })

      if (typeof payload.next === 'string') {
        uri = payload.next // change the initial uri with the "next page" uri
      } else {
        break
      }
    }

    resolve(tags)
  })
}

/**
 * @param {string} name
 * @return {string} empty string only if a variable was not set
 */
const getEnv = (name) => {
  if (name in process.env) {
    const value = process.env[name]

    if (typeof value === 'string' && value.length > 0) {
      return value
    }
  }

  return ''
}

/**
 *
 * @type {Object.<string, string[]>}
 */
const tagsArchIgnoreList = require('./ignorelist.json')

/**
 * @param {string} tag
 * @param {string} arch
 * @return {boolean}
 */
const shouldBeIgnored = (tag, arch) => {
  if (tag in tagsArchIgnoreList) {
    const archList = tagsArchIgnoreList[tag]

    if (archList.length === 0) {
      return false
    }

    for (let i = 0; i < archList.length; i++) {
      if (archList[i] === '*' || archList[i] === arch) {
        return true
      }
    }
  }

  return false
}

module.exports = {
  fetchImageTagInfo,
  fetchTagsHistory,
  shouldBeIgnored,
  getEnv,
}
