#!/bin/bash
# first `ssh dlvhdr`

git pull --rebase
npm install
npm run build
pkill -f "start -p 3001"
npm run start &

