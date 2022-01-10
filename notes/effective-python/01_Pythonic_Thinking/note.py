"""01 Pythonic Thinking"""

def unpack_instead_of_index() -> None:
    """Use unpack instead of index"""
    items = [
        "Dog",
        "Cat",
        "Bear",
        "Wolf",
        "Fox"
    ]
    # get top 2
    # with index is danger IndexError
    first, second = items[0], items[1]
    print(f"[index] first = {first}, second = {second}")
    # with unpack is safety
    first, second, *others = items
    print(f"[unpack] first = {first}, second = {second}")

if __name__ == "__main__":
    print(f"** {unpack_instead_of_index.__name__}")
    unpack_instead_of_index()

