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

Tag name | Details | Full image name | Dockerfile
:------: | :-----: | :-------------: | :--------:
`latest` | ![Size][badge_size_latest] | `tarampampam/node:latest` | [link][dockerfile_latest]
`alpine` | ![Size][badge_size_alpine] | `tarampampam/node:alpine` | [link][dockerfile_alpine]
`8-alpine`    | ![Size][badge_size_8_alpine]    | `tarampampam/node:8-alpine`    | [link][dockerfile_8_alpine]
`9-alpine`    | ![Size][badge_size_9_alpine]    | `tarampampam/node:9-alpine`    | [link][dockerfile_9_alpine]
`10.10-alpine` | ![Size][badge_size_10_10_alpine] | `tarampampam/node:10.10-alpine` | [link][dockerfile_10_10_alpine]
`10.11-alpine` | ![Size][badge_size_10_11_alpine] | `tarampampam/node:10.11-alpine` | [link][dockerfile_10_11_alpine]
`10.12-alpine` | ![Size][badge_size_10_12_alpine] | `tarampampam/node:10.12-alpine` | [link][dockerfile_10_12_alpine]
`10.13-alpine` | ![Size][badge_size_10_13_alpine] | `tarampampam/node:10.13-alpine` | [link][dockerfile_10_13_alpine]
`10.14-alpine` | ![Size][badge_size_10_14_alpine] | `tarampampam/node:10.14-alpine` | [link][dockerfile_10_14_alpine]
`10.15-alpine` | ![Size][badge_size_10_15_alpine] | `tarampampam/node:10.15-alpine` | [link][dockerfile_10_15_alpine]
`11-alpine`    | ![Size][badge_size_11_alpine]    | `tarampampam/node:11-alpine`    | [link][dockerfile_11_alpine]
`11.1-alpine`  | ![Size][badge_size_11_1_alpine]  | `tarampampam/node:11.1-alpine`  | [link][dockerfile_11_1_alpine]
`11.2-alpine`  | ![Size][badge_size_11_2_alpine]  | `tarampampam/node:11.2-alpine`  | [link][dockerfile_11_2_alpine]
`11.3-alpine`  | ![Size][badge_size_11_3_alpine]  | `tarampampam/node:11.3-alpine`  | [link][dockerfile_11_3_alpine]
`11.4-alpine`  | ![Size][badge_size_11_4_alpine]  | `tarampampam/node:11.4-alpine`  | [link][dockerfile_11_4_alpine]
`11.5-alpine`  | ![Size][badge_size_11_5_alpine]  | `tarampampam/node:11.5-alpine`  | [link][dockerfile_11_5_alpine]
`11.6-alpine`  | ![Size][badge_size_11_6_alpine]  | `tarampampam/node:11.6-alpine`  | [link][dockerfile_11_6_alpine]
`11.7-alpine`  | ![Size][badge_size_11_7_alpine]  | `tarampampam/node:11.7-alpine`  | [link][dockerfile_11_7_alpine]
`11.8-alpine`  | ![Size][badge_size_11_8_alpine]  | `tarampampam/node:11.8-alpine`  | [link][dockerfile_11_8_alpine]
`11.9-alpine`  | ![Size][badge_size_11_9_alpine]  | `tarampampam/node:11.9-alpine`  | [link][dockerfile_11_9_alpine]
`11.10-alpine` | ![Size][badge_size_11_10_alpine] | `tarampampam/node:11.10-alpine` | [link][dockerfile_11_10_alpine]
`11.11-alpine` | ![Size][badge_size_11_11_alpine] | `tarampampam/node:11.11-alpine` | [link][dockerfile_11_11_alpine]
`11.12-alpine` | ![Size][badge_size_11_12_alpine] | `tarampampam/node:11.12-alpine` | [link][dockerfile_11_12_alpine]
`11.14-alpine` | ![Size][badge_size_11_14_alpine] | `tarampampam/node:11.14-alpine` | [link][dockerfile_11_14_alpine]
`11.15-alpine` | ![Size][badge_size_11_15_alpine] | `tarampampam/node:11.15-alpine` | [link][dockerfile_11_15_alpine]
`12-alpine`    | ![Size][badge_size_12_alpine]    | `tarampampam/node:12-alpine`    | [link][dockerfile_12_alpine]
`12.1-alpine`  | ![Size][badge_size_12_1_alpine]  | `tarampampam/node:12.1-alpine`  | [link][dockerfile_12_1_alpine]
`12.2-alpine`  | ![Size][badge_size_12_2_alpine]  | `tarampampam/node:12.2-alpine`  | [link][dockerfile_12_2_alpine]
`12.3-alpine`  | ![Size][badge_size_12_3_alpine]  | `tarampampam/node:12.3-alpine`  | [link][dockerfile_12_3_alpine]
`12.4-alpine`  | ![Size][badge_size_12_4_alpine]  | `tarampampam/node:12.4-alpine`  | [link][dockerfile_12_4_alpine]
`12.5-alpine`  | ![Size][badge_size_12_5_alpine]  | `tarampampam/node:12.5-alpine`  | [link][dockerfile_12_5_alpine]
`12.6-alpine`  | ![Size][badge_size_12_6_alpine]  | `tarampampam/node:12.6-alpine`  | [link][dockerfile_12_6_alpine]

[badge_size_latest]:https://images.microbadger.com/badges/image/tarampampam/node.svg
[badge_size_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:alpine.svg
[badge_size_8_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:8-alpine.svg
[badge_size_9_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:9-alpine.svg
[badge_size_10_10_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.10-alpine.svg
[badge_size_10_11_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.11-alpine.svg
[badge_size_10_12_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.12-alpine.svg
[badge_size_10_13_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.13-alpine.svg
[badge_size_10_14_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.14-alpine.svg
[badge_size_10_15_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.15-alpine.svg
[badge_size_11_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11-alpine.svg
[badge_size_11_1_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.1-alpine.svg
[badge_size_11_2_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.2-alpine.svg
[badge_size_11_3_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.3-alpine.svg
[badge_size_11_4_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.4-alpine.svg
[badge_size_11_5_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.5-alpine.svg
[badge_size_11_6_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.6-alpine.svg
[badge_size_11_7_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.7-alpine.svg
[badge_size_11_8_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.8-alpine.svg
[badge_size_11_9_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.9-alpine.svg
[badge_size_11_10_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.10-alpine.svg
[badge_size_11_11_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.11-alpine.svg
[badge_size_11_12_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.12-alpine.svg
[badge_size_11_13_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.13-alpine.svg
[badge_size_11_14_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.14-alpine.svg
[badge_size_11_15_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:11.15-alpine.svg
[badge_size_12_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:12-alpine.svg
[badge_size_12_1_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:12.1-alpine.svg
[badge_size_12_2_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:12.2-alpine.svg
[badge_size_12_3_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:12.3-alpine.svg
[badge_size_12_4_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:12.4-alpine.svg
[badge_size_12_5_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:12.5-alpine.svg
[badge_size_12_6_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:12.6-alpine.svg

[dockerfile_latest]:https://github.com/tarampampam/node-docker/blob/image-latest/Dockerfile
[dockerfile_alpine]:https://github.com/tarampampam/node-docker/blob/image-alpine/Dockerfile
[dockerfile_8_alpine]:https://github.com/tarampampam/node-docker/blob/image-8-alpine/Dockerfile
[dockerfile_9_alpine]:https://github.com/tarampampam/node-docker/blob/image-9-alpine/Dockerfile
[dockerfile_10_alpine]:https://github.com/tarampampam/node-docker/blob/image-10-alpine/Dockerfile
[dockerfile_10_10_alpine]:https://github.com/tarampampam/node-docker/blob/image-10.10-alpine/Dockerfile
[dockerfile_10_11_alpine]:https://github.com/tarampampam/node-docker/blob/image-10.11-alpine/Dockerfile
[dockerfile_10_12_alpine]:https://github.com/tarampampam/node-docker/blob/image-10.12-alpine/Dockerfile
[dockerfile_10_13_alpine]:https://github.com/tarampampam/node-docker/blob/image-10.13-alpine/Dockerfile
[dockerfile_10_14_alpine]:https://github.com/tarampampam/node-docker/blob/image-10.14-alpine/Dockerfile
[dockerfile_10_15_alpine]:https://github.com/tarampampam/node-docker/blob/image-10.15-alpine/Dockerfile
[dockerfile_11_alpine]:https://github.com/tarampampam/node-docker/blob/image-11-alpine/Dockerfile
[dockerfile_11_1_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.1-alpine/Dockerfile
[dockerfile_11_2_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.2-alpine/Dockerfile
[dockerfile_11_3_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.3-alpine/Dockerfile
[dockerfile_11_4_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.4-alpine/Dockerfile
[dockerfile_11_5_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.5-alpine/Dockerfile
[dockerfile_11_6_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.6-alpine/Dockerfile
[dockerfile_11_7_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.7-alpine/Dockerfile
[dockerfile_11_8_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.8-alpine/Dockerfile
[dockerfile_11_9_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.9-alpine/Dockerfile
[dockerfile_11_10_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.10-alpine/Dockerfile
[dockerfile_11_11_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.11-alpine/Dockerfile
[dockerfile_11_12_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.12-alpine/Dockerfile
[dockerfile_11_13_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.13-alpine/Dockerfile
[dockerfile_11_14_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.14-alpine/Dockerfile
[dockerfile_11_15_alpine]:https://github.com/tarampampam/node-docker/blob/image-11.15-alpine/Dockerfile
[dockerfile_12_alpine]:https://github.com/tarampampam/node-docker/blob/image-12-alpine/Dockerfile
[dockerfile_12_1_alpine]:https://github.com/tarampampam/node-docker/blob/image-12.1-alpine/Dockerfile
[dockerfile_12_2_alpine]:https://github.com/tarampampam/node-docker/blob/image-12.2-alpine/Dockerfile
[dockerfile_12_3_alpine]:https://github.com/tarampampam/node-docker/blob/image-12.3-alpine/Dockerfile
[dockerfile_12_4_alpine]:https://github.com/tarampampam/node-docker/blob/image-12.4-alpine/Dockerfile
[dockerfile_12_5_alpine]:https://github.com/tarampampam/node-docker/blob/image-12.5-alpine/Dockerfile
[dockerfile_12_6_alpine]:https://github.com/tarampampam/node-docker/blob/image-12.6-alpine/Dockerfile

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
