"""How to use yield statement"""

def my_generator():
    for i in range(10):
        _ret = f'get {i}'
        yield _ret


if __name__ == "__main__":
    my_generator()
