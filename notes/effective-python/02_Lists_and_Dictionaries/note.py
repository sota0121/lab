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
        Tool('hammer', 1.25),
        Tool('screwdriver', 0.5),
        Tool('chisel', 0.25)
    ]
    print("Unsorted(name, weight): \n", tools)
    print("Effective sorting with name")
    sorted_with_name = tools
    sorted_with_name.sort(key=lambda x: x.name)
    print("tools.sort(key=lambda x: x.name) :\n", sorted_with_name)
    print("Effective sorting with weight")
    sorted_with_weight = tools
    sorted_with_weight.sort(key=lambda x: x.weight)
    print("tools.sort(key=lambda x: x.name) :\n", sorted_with_weight)


if __name__ == "__main__":
    print(f"** {donot_use_start_end_stride_in_the_same_time.__name__}")
    donot_use_start_end_stride_in_the_same_time()
    print()
    print(f"** {use_catch_all_unpack.__name__}")
    use_catch_all_unpack()
    print()
    print(f"** {complex_sort_with_key_arg.__name__}")
    complex_sort_with_key_arg()
