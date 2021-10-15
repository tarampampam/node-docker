<p align="center">
  <img src="https://socialify.git.ci/tarampampam/node-docker/image?forks=1&issues=1&logo=https%3A%2F%2Fhsto.org%2Fwebt%2F83%2Fnk%2F0y%2F83nk0ym623xt8yit1b3pq9tj4cs.png&owner=1&stargazers=1&theme=Dark" alt="node-docker" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/workflow/status/tarampampam/error-pages/build-minor?maxAge=20&label=build%20minor&logo=github&style=flat-square" alt="" />
  <img src="https://img.shields.io/github/workflow/status/tarampampam/error-pages/build-major?maxAge=20&label=build%20major&logo=github&style=flat-square" alt="" />
  <img src="https://img.shields.io/docker/pulls/tarampampam/node.svg?maxAge=30&logo=docker&logoColor=white&style=flat-square" alt="" />
  <img src="https://img.shields.io/github/license/tarampampam/node-docker.svg?maxAge=30&style=flat-square" alt="" />
</p>

# Why?

Base [`node`][base-node-image] image does not contain installed `git`, for example ([issue][node-586]). Because of this previously I had to build a separate image (installing many npm dependencies was otherwise impossible), but now we can just use this image :)

## Installed applications

We had installed to the alpine-based images the following applications (using a package manager):

- `git`
- `bash`
- `openssh`

> If you think something else should be installed additionally, please create an [issue in this repository][new-issue] describing the reason

### What about updates?

I took care of this - using periodic runs of GitHub actions tags in `major(.minor)-alpine` format are automatically rebuilt (if they have been updated). You can check all existing tags in one of the following docker-registries:

[![image stats](https://dockeri.co/image/tarampampam/node)][docker-hub-tags]

Registry                                   | Image
------------------------------------------ | -----
[Docker Hub][docker-hub]                   | `tarampampam/node`
[GitHub Container Registry][ghcr] (mirror) | `ghcr.io/tarampampam/node`

All tags support architectures that are available in the original tags:

```bash
$ docker run --rm mplatform/mquery tarampampam/node:latest
Image: tarampampam/node:latest
 * Manifest List: Yes
 * Supported platforms:
   - linux/s390x
   - linux/ppc64le
   - linux/amd64
   - linux/arm64
   - linux/arm/v7
```

## Supported tags

- `latest`
- `alpine`
- `lts-alpine`
- `current-alpine`
- `8-alpine`, `8.x-alpine` (deprecated)
- `9-alpine`, `9.x-alpine` (deprecated)
- `10-alpine`, `10.x-alpine`
- `11-alpine`, `11.x-alpine`
- `12-alpine`, `12.x-alpine`
- `13-alpine`, `13.x-alpine`
- `14-alpine`, `14.x-alpine`
- `15-alpine`, `15.x-alpine`
- `16-alpine`, `16.x-alpine`

> Note: Some tags/platforms [are ignored](.github/scripts/ignorelist.json) due to the "Segmentation fault" errors

## How can I use this?

For example:

```bash
$ docker run --rm \
    --volume "$(pwd):/app" \
    --workdir "/app" \
    --user "$(id -u):$(id -g)" \
    tarampampam/node:16-alpine \
    yarn install
```

Or using with `docker-compose.yml`:

```yml
services:
  node:
    image: tarampampam/node:16-alpine
    volumes:
      - ./src:/app:rw
    working_dir: /app
    command: []
```

## License

WTFPL. Use anywhere for your pleasure.

[node-586]:https://github.com/nodejs/docker-node/issues/586
[base-node-image]:https://hub.docker.com/_/node?tab=tags
[docker-hub]:https://hub.docker.com/r/tarampampam/node/
[ghcr]:https://github.com/tarampampam/node-docker/pkgs/container/node
[docker-hub-tags]:https://hub.docker.com/r/tarampampam/node/tags
[new-issue]:https://github.com/tarampampam/node-docker/issues/new
