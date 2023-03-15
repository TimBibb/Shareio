#!/bin/bash
set -e
export PATH=$PATH:/home/ec2-user/.nvm/versions/node/v16.19.1/bin
cd /usr/share/nginx/html
npm install

# Start the server using PM2 with the ecosystem.config.js file
pm2 start /home/ec2-user/ecosystem.config.js
pm2 status