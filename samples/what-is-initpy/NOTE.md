# What is `__init__.py` ?

## Resources

- `[jp]`
  - [Python の __init__.py とは何なのか | Qiita](https://qiita.com/msi/items/d91ea3900373ff8b09d7)
- `[en]`


## What is `__init__.py` for ?

`__init__.py` の役割とは以下である。

1. `__init__.py` は、モジュール検索のためのマーカーとなる。 **--> sample01**
2. `__init__.py` は、それが存在するディレクトリ名を名前とする名前空間の初期化を行う。 **--> sample02**
3. `__init__.py` は、同、名前空間におけるワイルドカード import の対象を定義する (`__all__` の定義) 。 **--> sample03**
4. `__init__.py` は、同じディレクトリにある他のモジュールの名前空間を定義する。 **--> sample04**

