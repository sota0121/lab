"""Class Inheritance in Python"""
from dataclasses import dataclass


@dataclass
class BaseClass:
    x: int

    def pub_add_x(self, v: int) -> int:
        _x = self.x + v
        return _x

    def __pri_add_x(self, v: int) -> int:
        _x = self.x + v
        return _x

@dataclass
class InheritClass(BaseClass):
    y: int
    z: int

    def __init__(self, x, y, z) -> None:
        super().__init__(x)
        self.y = y
        self.z = z

    def pub_add_y(self, v: int) -> int:
        _y = self.y + v
        return _y

    def __over_add_x(self, v: int) -> int:
        _x = super().__pri_add_x(v)
        _x = _x + self.y
        return _x


if __name__ == "__main__":
    bc = BaseClass(100)
    ic = InheritClass(10, 20, 30)
    print("bc.pub_add_x(1) = ", bc.pub_add_x(1))
    print("ic.pub_add_y(2) = ", ic.pub_add_y(2))
    print("ic.pub_add_x(3) = ", ic.pub_add_x(3))
