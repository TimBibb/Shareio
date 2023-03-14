#!/bin/bash
set -e
yum update -y
~/.nvm/versions/node/v16.19.1/bin/pm2 update