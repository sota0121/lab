# This script initialization of module02
# Module entities are in _module02.py

print(f"Initialize {__package__} in {__name__}")

from module02._module02_01 import hello as hello0201
from module02._module02_02 import hello as hello0202
from module02._module02_03 import hello as hello0203

# define `*` importing target
__all__ = ['hello0201', 'hello0202', 'hello0203']


# Do something initialization
hello0201(__name__)
hello0202(__name__)
hello0203(__name__)
