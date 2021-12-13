#! /bin/zsh
# exec in virtual env
PROTO_NAME="do_something"
python -m grpc_tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/$PROTO_NAME.proto
