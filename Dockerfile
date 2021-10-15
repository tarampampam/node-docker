# syntax=docker/dockerfile:1.2

# e.g.: `docker build --rm --build-arg "NODE_VERSION=latest" -f ./Dockerfile .`
# e.g.: `docker build --rm --build-arg "NODE_VERSION=11.8-alpine" -f ./Dockerfile .`
ARG NODE_VERSION

FROM node:${NODE_VERSION:-alpine}

RUN set -x \
    && . /etc/os-release \
    && case "$ID" in \
        alpine) \
            apk add --no-cache bash git openssh \
            ;; \
        debian) \
            apt-get update \
            && apt-get -yq install bash git openssh-server \
            && apt-get -yq clean \
            && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
            ;; \
    esac \
    # install yarn, if needed (only applies to older versions, like 6 or 7)
    && yarn bin || ( npm install --global yarn && npm cache clean ) \
    # show installed application versions
    && git --version && bash --version && ssh -V && npm -v && node -v && yarn -v
