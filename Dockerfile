# e.g.: `docker build --rm --build-arg "NODE_VERSION=latest" -f ./Dockerfile .`
ARG NODE_VERSION

FROM node:${NODE_VERSION}

RUN set -x \
    && apt-get update \
    && apt-get -yq install bash git openssh-server \
    && apt-get -yq clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
    && git --version && bash --version && ssh -V && npm -v && node -v && yarn -v
