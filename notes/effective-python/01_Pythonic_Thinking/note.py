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


def use_walrus(num_of_lemons: int) -> None:
    """use walrus

        - if文内でも宣言と代入を同時にできる
    """
    fresh_fruit = {
        'apple': 10,
        'banana': 8,
        'lemmon': num_of_lemons
    }
    print(fresh_fruit)
    # bad
    count = fresh_fruit.get('lemmon', 0)
    if count:
        print("make lemonade")
    else:
        print("out of stock")
    # effective
    # - count var scope gets shallower than before
    if _count := fresh_fruit.get('lemmon', 0):
        print("make lemonade")
    else:
        print("out of stock")


if __name__ == "__main__":
    print(f"** {unpack_instead_of_index.__name__}")
    unpack_instead_of_index()

    print(f"** {use_walrus.__name__}")
    use_walrus(5)
    use_walrus(0)

