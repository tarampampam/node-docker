<p align="center">
  <img alt="logo" src="https://hsto.org/webt/83/nk/0y/83nk0ym623xt8yit1b3pq9tj4cs.png" width="128" />
</p>

# `node` image with additional useful apps installed

[![Build][badge_automated]][link_hub]
[![Build][badge_build]][link_hub]
[![Docker Pulls][badge_pulls]][link_hub]
[![Issues][badge_issues]][link_issues]
[![License][badge_license]][link_license]

## Why this image created?

Base [`node`][link_base_node_image] images does not contains installed `git`, for example ([issue][node-586]).

Applications from base images:

- `node`
- `yarn`
- `npm`

Installed applications list:

- `git`
- `bash`
- `openssh`

And updated `npm` version.

> Page on `hub.docker.com` can be [found here][link_hub].

Supported tags:

Tag name      | Details                         | Full image name                | Dockerfile
:-----------: | :-----------------------------: | :----------------------------: | :--------:
`latest`      | ![Size][badge_size_latest]      | `tarampampam/node:latest`      | [link][dockerfile_latest]
`alpine`      | ![Size][badge_size_alpine]      | `tarampampam/node:alpine`      | [link][dockerfile_alpine]
`8-alpine`    | ![Size][badge_size_8_alpine]    | `tarampampam/node:8-alpine`    | [link][dockerfile_8_alpine]
`9-alpine`    | ![Size][badge_size_9_alpine]    | `tarampampam/node:9-alpine`    | [link][dockerfile_9_alpine]
`11-alpine`   | ![Size][badge_size_11_alpine]   | `tarampampam/node:11-alpine`   | [link][dockerfile_11_alpine]
`12-alpine`   | ![Size][badge_size_12_alpine]   | `tarampampam/node:12-alpine`   | [link][dockerfile_12_alpine]
`13-alpine`   | ![Size][badge_size_13_alpine]   | `tarampampam/node:13-alpine`   | [link][dockerfile_13_alpine]
`13.1-alpine` | ![Size][badge_size_13_1_alpine] | `tarampampam/node:13.1-alpine` | [link][dockerfile_13_1_alpine]
`13.2-alpine` | ![Size][badge_size_13_2_alpine] | `tarampampam/node:13.2-alpine` | [link][dockerfile_13_2_alpine]

[badge_size_latest]:https://images.microbadger.com/badges/image/tarampampam/node.svg
[badge_size_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:alpine.svg
[badge_size_8_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:8-alpine.svg
[badge_size_9_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:9-alpine.svg
[badge_size_11_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11-alpine.svg
[badge_size_12_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:12-alpine.svg
[badge_size_13_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:13-alpine.svg
[badge_size_13_1_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:13.1-alpine.svg
[badge_size_13_2_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:13.2-alpine.svg
[dockerfile_latest]:https://github.com/tarampampam/node-docker/blob/image-latest/Dockerfile
[dockerfile_alpine]:https://github.com/tarampampam/node-docker/blob/image-alpine/Dockerfile
[dockerfile_8_alpine]:https://github.com/tarampampam/node-docker/blob/image-8-alpine/Dockerfile
[dockerfile_9_alpine]:https://github.com/tarampampam/node-docker/blob/image-9-alpine/Dockerfile
[dockerfile_10_alpine]:https://github.com/tarampampam/node-docker/blob/image-10-alpine/Dockerfile
[dockerfile_11_alpine]:https://github.com/tarampampam/node-docker/blob/image-11-alpine/Dockerfile
[dockerfile_12_alpine]:https://github.com/tarampampam/node-docker/blob/image-12-alpine/Dockerfile
[dockerfile_13_alpine]:https://github.com/tarampampam/node-docker/blob/image-13-alpine/Dockerfile
[dockerfile_13_1_alpine]:https://github.com/tarampampam/node-docker/blob/image-13.1-alpine/Dockerfile
[dockerfile_13_2_alpine]:https://github.com/tarampampam/node-docker/blob/image-13.2-alpine/Dockerfile

## How can I use this?

For example:

```bash
$ docker run --rm \
    --volume "$PWD:/app" \
    --workdir "/app" \
    --user "$(id -u):$(id -g)" \
    tarampampam/node:11-alpine \
    npm install
```

Or using with `docker-compose.yml`:

```yml
services:
  node:
    image: tarampampam/node:11-alpine
    volumes:
    - ./src:/app:rw
    working_dir: /app
    command: []
```

### License

WTFPL. Use anywhere for your pleasure.

[badge_automated]:https://img.shields.io/docker/automated/tarampampam/node.svg?style=flat-square&maxAge=30
[badge_pulls]:https://img.shields.io/docker/pulls/tarampampam/node.svg?style=flat-square&maxAge=30
[badge_issues]:https://img.shields.io/github/issues/tarampampam/node-docker.svg?style=flat-square&maxAge=30
[badge_build]:https://img.shields.io/docker/build/tarampampam/node.svg?style=flat-square&maxAge=30
[badge_license]:https://img.shields.io/github/license/tarampampam/node-docker.svg?style=flat-square&maxAge=30
[node-586]:https://github.com/nodejs/docker-node/issues/586
[link_base_node_image]:https://hub.docker.com/_/node?tab=tags
[link_hub]:https://hub.docker.com/r/tarampampam/node/
[link_license]:https://github.com/tarampampam/node-docker/blob/master/LICENSE
[link_issues]:https://github.com/tarampampam/node-docker/issues
