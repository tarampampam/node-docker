#!/usr/bin/make
# Makefile readme (ru): <http://linux.yaroslavl.ru/docs/prog/gnu_make_3-79_russian_manual.html>
# Makefile readme (en): <https://www.gnu.org/software/make/manual/html_node/index.html#SEC_Contents>

SHELL = /bin/sh

IMAGES_PREFIX := $(shell basename $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST)))))

IMAGE_10_10_ALPINE_TAG = $(IMAGES_PREFIX)_10.10-alpine
IMAGE_ALPINE_TAG = $(IMAGES_PREFIX)_alpine
IMAGE_LATEST_TAG = $(IMAGES_PREFIX)_latest

docker_bin := $(shell command -v docker 2> /dev/null)

all_images = $(IMAGE_10_10_ALPINE_TAG) \
             $(IMAGE_LATEST_TAG)

.PHONY : help build clean \
         build-10-alpine build-alpine build-latest
.DEFAULT_GOAL := help

# This will output the help for each task. thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build-alpine:
	$(docker_bin) build \
	  --tag "$(IMAGE_ALPINE_TAG)" \
	  -f ./dockerfiles/Dockerfile.alpine ./dockerfiles

build-10-alpine:
	$(docker_bin) build \
	  --tag "$(IMAGE_10_10_ALPINE_TAG)" \
	  -f ./dockerfiles/Dockerfile.10.10-alpine ./dockerfiles

build-latest:
	$(docker_bin) build \
	  --tag "$(IMAGE_LATEST_TAG)" \
	  -f ./dockerfiles/Dockerfile.latest ./dockerfiles

build: build-alpine build-10-alpine build-latest ## Build all Docker images locally

clean: ## Remove images from local registry
	$(foreach image,$(all_images),$(docker_bin) rmi -f $(image);)
