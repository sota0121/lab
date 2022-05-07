# Note

## repo

- Text: [github - NM-Udemy/FlaskCourse](https://github.com/NM-Udemy/FlaskCourse)
- my repo: [github - sota0121/lab](https://github.com/sota0121/lab)


## memo

- MVT構成である

![img1](images/img1.png)

- 静的ルーティング
  - 変数がないURL
- 動的ルーティング
  - 変数があるURL
- ルーティングは一つの関数に複数URLを指定することができる

```python
@app.route('/')
@app.route('/hello')
def info():
    return "hello"
```

- debug 方法。`debug=True` でAppを実行すると、エラー時にブラウザでエラー画面になる。実は、これには続きがある。エラー画面でエラー発生行にある「ターミナルアイコン」を押すと、コンソールを開くことができる。
  - その際、PINを入力する必要がある。PINはコンソールに `Debugger pin code` という形で表示されているのでコピペする。
  - ![img2](images/img2.png)
  - ![img3](images/img3.png)

