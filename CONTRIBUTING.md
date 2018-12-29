# Contribution Guidelines

Please ensure your pull request adheres to the following guidelines:

- Search previous suggestions before making a new one, as yours may be a duplicate
- Suggested packages should be tested and documented
- Make an individual pull request for each suggestion
- Use the following format: `[service](link) - Description`
- New categories, or improvements to the existing categorization are welcome
- Keep descriptions short and simple, but descriptive
- End all descriptions with a full stop/period
- Check your spelling and grammar
- Make sure your text editor is set to remove trailing whitespace

## Branches and docker tags

We use automated docker builds. You must to know and follow next rules:

- Any branch, which name starts with `image-` *(image tag branch)* is protected, and used for building docker image and pushing with same tag (without `image-` prefix)
- `master` branch used only for documentation and descriptions

Image tag branches:

- Must be created with next commands: `git checkout --orphan image-DOCKER_TAG_NAME && git rm -rf .`
- Must contains `Dockerfile` into the root (`/`)
- Any after `image-` will be used as docker image tag name *(e.g. branch `image-alpine` &rarr; tag `alpine`, branch `image-11.1-alpine` &rarr; tag `11.1-alpine`)*

## New image tag creating

If you want to create new image tag, you should:

- Create new issue with description
- Create PR with your `Dockerfile` contents into new branch with name `image-*`
- Create PR into `master` branch with your image tag description (`README.md`) and changes description (`CHANGELOG.md`)

Thank you for your suggestions!
