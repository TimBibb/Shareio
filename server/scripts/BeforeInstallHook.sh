#!/bin/bash
set -e
yum update -y
$NVM_DIR/versions/node/v16.19.1/bin/pm2 update