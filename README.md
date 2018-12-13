<p align="center">
  <img alt="logo" src="https://hsto.org/webt/83/nk/0y/83nk0ym623xt8yit1b3pq9tj4cs.png" width="80" />
</p>

# `node` image with additional useful apps installed

[![Build][badge_automated]][link_hub]
[![Build][badge_build]][link_hub]
[![Docker Pulls][badge_pulls]][link_hub]
[![Issues][badge_issues]][link_issues]
[![License][badge_license]][link_license]

## Why this image created?

Base `node` images does not contains installed `git`, for example ([issue][node-586]).

Installed applications list:

- `git`
- `bash`
- `openssh`
- `yarn`

And updated `npm` version.

> Page on `hub.docker.com` can be [found here][link_hub].

Supported tags:

Tag name | Details | Full image name | Dockerfile
:------: | :-----: | :-------------: | :--------:
`latest` | ![Size][badge_size_latest] | `tarampampam/node` | [link][dockerfile_latest]
`alpine` | ![Size][badge_size_alpine] | `tarampampam/node:alpine` | [link][dockerfile_alpine]
`10.10-alpine` | ![Size][badge_size_10_10_alpine] | `tarampampam/node:10.10-alpine` | [link][dockerfile_10_10_alpine]
`10.11-alpine` | ![Size][badge_size_10_11_alpine] | `tarampampam/node:10.11-alpine` | [link][dockerfile_10_11_alpine]
`10.12-alpine` | ![Size][badge_size_10_12_alpine] | `tarampampam/node:10.12-alpine` | [link][dockerfile_10_12_alpine]
`10.13-alpine` | ![Size][badge_size_10_13_alpine] | `tarampampam/node:10.13-alpine` | [link][dockerfile_10_13_alpine]
`11.1-alpine`  | ![Size][badge_size_11_1_alpine]  | `tarampampam/node:11.1-alpine`  | [link][dockerfile_11_1_alpine]
`11.2-alpine`  | ![Size][badge_size_11_2_alpine]  | `tarampampam/node:11.2-alpine`  | [link][dockerfile_11_2_alpine]
`11.3-alpine`  | ![Size][badge_size_11_3_alpine]  | `tarampampam/node:11.3-alpine`  | [link][dockerfile_11_3_alpine]
`11.4-alpine`  | ![Size][badge_size_11_4_alpine]  | `tarampampam/node:11.4-alpine`  | [link][dockerfile_11_4_alpine]

[badge_size_latest]:https://images.microbadger.com/badges/image/tarampampam/node.svg
[badge_size_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:alpine.svg
[badge_size_10_10_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.10-alpine.svg
[badge_size_10_11_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.11-alpine.svg
[badge_size_10_12_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.12-alpine.svg
[badge_size_10_13_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.13-alpine.svg
[badge_size_11_1_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.1-alpine.svg
[badge_size_11_2_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.2-alpine.svg
[badge_size_11_3_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.3-alpine.svg
[badge_size_11_4_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.4-alpine.svg

[dockerfile_latest]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.latest
[dockerfile_alpine]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.alpine
[dockerfile_10_10_alpine]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.10.10-alpine
[dockerfile_10_11_alpine]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.10.11-alpine
[dockerfile_10_12_alpine]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.10.12-alpine
[dockerfile_10_13_alpine]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.10.13-alpine
[dockerfile_11_1_alpine]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.11.1-alpine
[dockerfile_11_2_alpine]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.11.2-alpine
[dockerfile_11_3_alpine]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.11.3-alpine
[dockerfile_11_4_alpine]:https://github.com/tarampampam/node-docker/blob/master/dockerfiles/Dockerfile.11.4-alpine

## How can I use this?

For example:

```bash
$ docker run --rm \
    --volume "$PWD:/app" \
    --workdir "/app" \
    --user "$(id -u):$(id -g)" \
    tarampampam/node:10.10-alpine \
    npm install
```

Or using with `docker-compose.yml`:

```yml
services:
  node:
    image: tarampampam/node:10.10-alpine
    volumes:
    - ./src:/app:rw
    working_dir: /app
    command: []
```

### License

MIT. Use anywhere for your pleasure.

[badge_automated]:https://img.shields.io/docker/automated/tarampampam/node.svg?style=flat-square&maxAge=30
[badge_pulls]:https://img.shields.io/docker/pulls/tarampampam/node.svg?style=flat-square&maxAge=30
[badge_issues]:https://img.shields.io/github/issues/tarampampam/node-docker.svg?style=flat-square&maxAge=30
[badge_build]:https://img.shields.io/docker/build/tarampampam/node.svg?style=flat-square&maxAge=30
[badge_license]:https://img.shields.io/github/license/tarampampam/node-docker.svg?style=flat-square&maxAge=30
[node-586]:https://github.com/nodejs/docker-node/issues/586
[link_hub]:https://hub.docker.com/r/tarampampam/node/
[link_license]:https://github.com/tarampampam/node-docker/blob/master/LICENSE
[link_issues]:https://github.com/tarampampam/node-docker/issues
