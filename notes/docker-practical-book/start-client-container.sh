#! /bin/bash

docker container run \
-it \
--rm \
--name webclient \
-h webclient04 \
--net=ac-overlay-net \
centos:7.5.1804 /bin/bash

