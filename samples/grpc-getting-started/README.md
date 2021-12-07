# Note

## Resources

- [grpc/grpc/examples | GitHub](https://github.com/grpc/grpc/tree/master/examples)
- [grpc/grpc-go/examples | GitHub](https://github.com/grpc/grpc-go/tree/master/examples)
- [grpc Documentation - Go](https://grpc.io/docs/languages/go/)
- [grpc Documentation - Python](https://grpc.io/docs/languages/python/)

<br><br>

## Why use gRPC ?

[Python - Basics tutorial - Why use gRPC ? | gRPC Documentation](https://grpc.io/docs/languages/python/basics/#why-use-grpc)

> With gRPC we can define our service once in a .proto file and generate clients and servers in any of gRPC’s supported languages, which in turn can be run in environments ranging from servers inside a large data center to your own tablet — all the complexity of communication between different languages and environments is handled for you by gRPC. We also get all the advantages of working with protocol buffers, including efficient serialization, a simple IDL, and easy interface updating.

<br><br>

## Basic development with gRPC

1. Implement protobuf source `*.proto`. This code defines INTERFACE of the server.
2. Compile protobuf source with `protoc`, and then Generate gRPC code. `protoc` is compiler.
   1. **in Python**: `$PROTO_NAME_pb2.py` and `$PROTO_NAME_pb2_grpc.py` are generated
   2. **in Go**: `$PROTO_NAME/$PROTO_NAME.pb.go` and `$PROTO_NAME/$PROTO_NAME_grpc.pb.go` are generated
3. Implement gRPC server
   1. **in Python**: Implement Server class inheriting `$PROTO_NAME_pb2.XXXServicer`
   2. **in Go**: Implement Server class using `path/to/src/$PROTO_NAME`
