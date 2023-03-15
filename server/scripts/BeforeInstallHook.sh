#!/bin/bash
set -e
source ~/.bashrc
pwd
env
yum update -y
/$NVM_BIN/pm2 update