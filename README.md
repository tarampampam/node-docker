<p align="center">
  <img alt="logo" src="https://hsto.org/webt/83/nk/0y/83nk0ym623xt8yit1b3pq9tj4cs.png" width="80" />
</p>

# "node" image with additional useful apps installed

[![Build][badge_build]][link_build]
[![Stars][badge_pulls]][link_pulls]
[![License][badge_license]][link_license]
[![Issues][badge_issues]][link_issues]

### Why this image created?

Alpine-based `node` image does not contains installed `git`, for example ([issue][node-586]).

### How can I use this?

For example:

```bash
$ docker rum --rm tarampampam/node:10.10-alpine npm install
```

#### License

MIT. Use anywhere for your pleasure.

[node-586]:https://github.com/nodejs/docker-node/issues/586
[badge_build]:https://img.shields.io/docker/build/tarampampam/node.svg?style=flat-square&maxAge=30
[badge_pulls]:https://img.shields.io/docker/pulls/tarampampam/node.svg?style=flat-square&maxAge=30
[badge_license]:https://img.shields.io/github/license/tarampampam/node-docker.svg?style=flat-square&maxAge=30
[badge_issues]:https://img.shields.io/github/issues/tarampampam/node-docker.svg?style=flat-square&maxAge=30
[link_build]:https://hub.docker.com/r/tarampampam/node/builds/
[link_pulls]:https://hub.docker.com/r/tarampampam/node/
[link_license]:https://github.com/tarampampam/node-docker/blob/master/LICENSE
[link_issues]:https://github.com/tarampampam/node-docker/issues
[docker_hub]:https://hub.docker.com/r/tarampampam/node/
