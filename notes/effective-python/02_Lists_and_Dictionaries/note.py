"""02 Lists and Dictionaries"""

from dataclasses import dataclass


def donot_use_start_end_stride_in_the_same_time() -> None:
    """Do not use start/end/stride in the same time"""
    x = ['a', 'b', 'c', 'd', 'e', 'f']

    # Bad UNREADABLE
    print("# Bad UNREADABLE")
    print(f"x[2::2] = {x[2::2]}")
    print(f"x[-2::-2] = {x[-2::-2]}")
    print(f"x[-2:2:-2] = {x[-2:2:-2]}")
    print(f"x[2:2:-2] = {x[2:2:-2]}")

    print("# Effective")
    print("# Start/End pattern or Stride pattern only")
    print(f"x[::2] = {x[::2]}")
    print(f"x[1:-1] = {x[1:-1]}")


def use_catch_all_unpack() -> None:
    """Use catch-all unpack instead of index"""
    x = ['a', 'b', 'c', 'd', 'e', 'f']
    print(f"x = {x}")
    print("# Bad")
    try:
        print(f"first, second = x")
        f, s = x
    except ValueError as e:
        print(repr(e))
    print("# Effective")
    first, second, *others = x
    print(f"first, second, *others = x /  ({first}, {second}, {others})")
    first, *others, last = x
    print(f"first, *others, last,  = x /  ({first}, {others}, {last})")


def complex_sort_with_key_arg() -> None:
    """Complex sort with key arg"""
    @dataclass
    class Tool:
        name: str
        weight: float

        def __repr__(self) -> str:
            return f'Tool({self.name}, {self.weight})'

    tools = [
        Tool('level', 3.5),
        Tool('level', 4.6),
        Tool('hammer', 1.25),
        Tool('hammer', 4.6),
        Tool('hammer', 3.5),
        Tool('screwdriver', 1.25),
        Tool('screwdriver', 0.5),
        Tool('chisel', 1.25),
        Tool('chisel', 0.25),
        Tool('chisel', 3.5)
    ]
    print("Unsorted(name, weight): \n", tools)

    print("Effective sorting with name")
    sorted_with_name = tools
    sorted_with_name.sort(key=lambda x: x.name)
    print(" | tools.sort(key=lambda x: x.name) :\n", sorted_with_name)

    print("Effective sorting with weight")
    sorted_with_weight = tools
    sorted_with_weight.sort(key=lambda x: x.weight)
    print(" | tools.sort(key=lambda x: x.name) :\n", sorted_with_weight)

    print("Effective complex sorting with name/weight")
    print(" | (1) name-ASC > weight-DESC")
    sorted_with_nw_1 = tools
    sorted_with_nw_1.sort(key=lambda x: (x.name, -x.weight))
    print(" | - tools.sort(key=lambda x: (x.name, -x.weight)):\n", sorted_with_nw_1)

    print(" | (2) name-DESC > weight-ASC")
    sorted_with_nw_2 = tools
    # reverse affects both of name/weight attributes.
    # str can't use `negative` for DESCENDING
    sorted_with_nw_2.sort(key=lambda x: (x.name, -x.weight), reverse=True)
    print(" | - tools.sort(key=lambda x: (x.name, -x.weight), reverse=True):\n", sorted_with_nw_2)

    print(" | (3) weight-ASC > name-DESC")
    sorted_with_nw_3 = tools
    # key priority is decided by tuple order
    sorted_with_nw_3.sort(key=lambda x: (-x.weight, x.name), reverse=True)
    print(" | - tools.sort(key=lambda x: (-x.weight, x.name), reverse=True):\n", sorted_with_nw_3)

    print(" | (4) weight-DESC > name-DESC")
    sorted_with_nw_4 = tools
    # reverse affects both of name/weight attributes.
    sorted_with_nw_4.sort(key=lambda x: (x.weight, x.name), reverse=True)
    print(" | - tools.sort(key=lambda x: (-x.weight, x.name), reverse=True):\n", sorted_with_nw_4)


if __name__ == "__main__":
    print(f"** {donot_use_start_end_stride_in_the_same_time.__name__}")
    donot_use_start_end_stride_in_the_same_time()
    print()
    print(f"** {use_catch_all_unpack.__name__}")
    use_catch_all_unpack()
    print()
    print(f"** {complex_sort_with_key_arg.__name__}")
    complex_sort_with_key_arg()
