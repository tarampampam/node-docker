#!/usr/bin/env bash
set -e

IMAGE_TAG="${1:-}";

if [[ ! -z ${IMAGE_TAG} ]]; then

  while true; do
    echo -n "[Question] "; read -e -p "Tag '$IMAGE_TAG'. Do you want to continue? [y|n] " -i "" yn;
    case ${yn} in
      [Nn]*) exit 1;;
      [Yy]*) break;;
      *)     echo 'Please answer (y)es or (n)o';;
    esac;
  done;

  git checkout --orphan "image-$IMAGE_TAG";
  git rm -rf .;

  cat >./.gitignore <<EOL
# IDEs
/nbproject
/.idea

# Temp dirs and trash
/temp
/tmp
.DS_Store
EOL

  cat >./Dockerfile <<EOL
FROM node:${IMAGE_TAG}-alpine

RUN set -xe \\
    && apk add --no-cache bash git openssh \\
    && npm install -g npm \\
    && git --version && bash --version && ssh -V && npm -v && node -v && yarn -v
EOL

  git add .;
  git commit -m 'Dockerfile added';
  git push --set-upstream origin "image-$IMAGE_TAG";
  git checkout master;
else
  echo '[ERR] Tag name not passed. Tag should looks like "10.13" (without any prefix or postfix)';
fi;
