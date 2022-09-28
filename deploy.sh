#!/bin/bash
# first `ssh dlvhdr`

git pull --rebase
yarn install
yarn run build
pkill -f "start -p 3001"
yarn run start &

