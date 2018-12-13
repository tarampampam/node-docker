FROM node:11.2-alpine

RUN set -xe \
    && apk add --no-cache bash git openssh yarn \
    && npm install -g npm \
    && git --version && bash --version && ssh -V && npm -v && node -v && yarn -v
