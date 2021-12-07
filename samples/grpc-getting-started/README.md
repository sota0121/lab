# Note

## Resources

- [grpc/grpc/examples | GitHub](https://github.com/grpc/grpc/tree/master/examples)
- [grpc/grpc-go/examples | GitHub](https://github.com/grpc/grpc-go/tree/master/examples)
- [grpc Documentation - Go](https://grpc.io/docs/languages/go/)
- [grpc Documentation - Python](https://grpc.io/docs/languages/python/)

## Basic development with gRPC

1. Implement protobuf source `*.proto`. This code defines INTERFACE of the server.
2. Compile protobuf source with `protoc`, and then Generate gRPC code. `protoc` is compiler.
   1. **in Python**: `$PROTO_NAME_pb2.py` and `$PROTO_NAME_pb2_grpc.py` are generated
   2. **in Go**: `$PROTO_NAME/$PROTO_NAME.pb.go` and `$PROTO_NAME/$PROTO_NAME_grpc.pb.go` are generated
3. Implement gRPC server
   1. **in Python**: Implement Server class inheriting `$PROTO_NAME_pb2.XXXServicer`
   2. **in Go**: Implement Server class using `path/to/src/$PROTO_NAME`
