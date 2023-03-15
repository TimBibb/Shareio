#!/bin/bash
set -e
source ~/.bashrc
export PATH=$PATH:/home/ec2-user/.nvm/versions/node/v16.19.1/bin
yum update -y
pm2 update