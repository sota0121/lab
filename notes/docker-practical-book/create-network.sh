#! /bin/bash

# [CAUSION] Execute this script on the Manager Node

docker network create \
-d overlay \
--subnet 10.11.0.0/24 \
--attachable \
ac-overlay-net
