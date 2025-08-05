#!/bin/sh

set -e

target=$1
if [ "${target}" = "prod" ]; then
    echo "test"
elif [ "${target}" = "dev" ]; then
	./bin/build.sh dev
    kubectl rollout restart deployment/admin-front-dpl -n p-pay
fi
