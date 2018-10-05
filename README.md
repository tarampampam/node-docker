<p align="center">
  <img alt="logo" src="https://hsto.org/webt/83/nk/0y/83nk0ym623xt8yit1b3pq9tj4cs.png" width="80" />
</p>

# "node" image with additional useful apps installed

[![Build][badge_automated]][link_hub]
[![Build][badge_build]][link_hub]
[![Docker Pulls][badge_pulls]][link_hub]
[![Issues][badge_issues]][link_issues]
[![License][badge_license]][link_license]

### Why this image created?

Alpine-based `node` image does not contains installed `git`, for example ([issue][node-586]).

> Page on `hub.docker.com` can be [found here][link_hub].

Supported tags:

Tag name | Details | Full image name | Dockerfile
:------: | :-----: | :-------------: | :--------:
`latest` | ![Size][badge_size_latest] | `tarampampam/node` | [link](./dockerfiles/Dockerfile.latest)
`alpine` | ![Size][badge_size_alpine] | `tarampampam/node:alpine` | [link](./dockerfiles/Dockerfile.alpine)
`10.10-alpine` | ![Size][badge_size_10_10_alpine] | `tarampampam/node:10.10-alpine` | [link](./dockerfiles/Dockerfile.10.10-alpine)

[badge_size_latest]:https://images.microbadger.com/badges/image/tarampampam/node.svg
[badge_size_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:alpine.svg
[badge_size_10_10_alpine]:https://images.microbadger.com/badges/image/tarampampam/node:10.10-alpine.svg

### How can I use this?

For example:

```bash
$ docker run --rm \
    --volume "$PWD:/app" \
    --workdir "/app" \
    --user "$(id -u):$(id -g)" \
    tarampampam/node:10.10-alpine \
    npm install
```

#### License

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
