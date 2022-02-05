#! /bin/bash

# [CAUSION] Execute this script on the Manager Node

docker stack deploy -c ac.stack.yml ac01
