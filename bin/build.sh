#!/bin/sh
set -e
target=$1
version="v0.0.27"
  docker build -t vdb-web:${version} -f ./docker/Dockerfile.dev .
  docker tag vdb-web:${version} polygontechxyz/vdb-web:${version}
  docker push polygontechxyz/vdb-web:${version}
# fi