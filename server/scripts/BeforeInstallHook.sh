#!/bin/bash
set -e
source ~/.bashrc
pwd
yum update -y
$NVM_BIN/pm2 update