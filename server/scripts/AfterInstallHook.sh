#!/bin/bash
set -e
export PATH=$PATH:/home/ec2-user/.nvm/versions/node/v16.19.1/bin
cd /usr/share/nginx/html
npm install
npm run build