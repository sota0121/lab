#! /bin/bash

# Build with tag
docker image build -f ./Dockerfile -t access-count:v1 .

# --build-arg http_proxy=http://proxy.
# --build-arg

# Push the image to docker hub
docker tag access-count:v1 sota0121/access-count:v1
docker push sota0121/access-count:v1
