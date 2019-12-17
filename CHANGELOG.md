# Changelog

All notable changes to this project will be documented in this file.

## 19.9.25

### Added

- Dockerfile for `12.7-alpine`
- Dockerfile for `12.8-alpine`
- Dockerfile for `12.9-alpine`
- Dockerfile for `12.10-alpine`

## 19.1.11

### Added

- Dockerfile for `10.14-alpine`
- Dockerfile for `10.15-alpine`

## 18.12.29

### Removed

- Repository Makefile
- `(apk|apt) (install|add) yarn` removed from all dockerfiles (already presented in base images)

### Changed

- Dockerfiles moved onto protected branches (like `image-*`)
- [Docker hub][own_docker_hub] now use single rule for all images builds:
  - Type: `branch`
  - Name: `/^image\-(.+)$/`
  - Dockerfile location: `/`
  - Docker Tag Name: `{\1}`
- Licence type changed from `MIT` to `WTFPL` :)

### Added

- Automatic rebuilding (once in a week, plus/minus; used `gitlab.com` "Scheduling Pipelines" for calling triggers on `hub.docker.com`) for next images *(tags)*:
  - `alpine`
  - `latest`
  - `11-alpine`
  - `10-alpine`

## 18.12.28

### Added

- Dockerfile for `10-alpine`
- Dockerfile for `11-alpine`
- Dockerfile for `11.5-alpine`
- Dockerfile for `11.6-alpine`

## 18.12.13

### Changed

- Each image now includes command for update installed `npm` package (`npm install -g npm`)

## 18.12.11

### Added

- Dockerfile for `11.4-alpine`

## 18.12.5

### Added

- `yarn` installed into all images

## 18.12.4

### Changed

- Makefile updated
- All images now includes commands for installed applications verification (like `npm -v`, `git --version`, etc)

## 18.12.3

### Added

- Dockerfile for `11.2-alpine`
- Dockerfile for `11.3-alpine`

## 18.11.7

### Added

- Dockerfile for `10.13-alpine`
- Dockerfile for `11.1-alpine`

## 18.10.16

### Added

- Dockerfile for `10.12-alpine`

## 18.10.10

### Added

- Dockerfile for `10.11-alpine`

## 18.10.5

### Added

- `.git*` files
- Basic Makefile
- Dockerfile for `10.10-alpine`
- Dockerfile for `alpine`
- Dockerfile for `latest`

[own_docker_hub]:https://hub.docker.com/r/tarampampam/node
