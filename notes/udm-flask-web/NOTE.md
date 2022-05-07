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
- デフォルトは `app.py` 階層の `templates/*.html` を読む
  - 指定する場合は、 `Flask(__name__, template_folder="xxx")` といった形でキーワード引数で指定する
- **=== Jinja2 ===**
- 変数を使う
  - サーバー側では `return render_template('index.html', user={'name': 'taro', 'age': 19})` といった形
  - HTML側は `{{ user.name }}` や `{{ user['name'] }}` といった形で使う。
- 制御文を使う
  - `{% for user in users %}` / `{% endfor %}`
  - `{% if len(users) > 0 %}` / `{% endif %}`
- テンプレートの継承
  - 継承元
    - `{% block content %}` / `{% endblock %}` で囲んだ場所が継承先で定義する場所
  - 継承先
    - `{% extend "base.html" %}` がImport文のようなもの。継承する。
    - `{% block content %}` / `{% endblock %}` で囲んだ場所に具象を定義する。
  - 継承先のテンプレートで継承元の値を使いたい場合は、 `{{ super() }}` と記述する
- テンプレートのフィルタ
  - どんなものか？<br>![img4](images/img4.png)
  - templates 上で値を変換するのに使う
  - Document: https://jinja.palletsprojects.com/en/3.0.x/templates/#list-of-builtin-filters
  - パイプのように書くスタイルとブロックで囲むスタイルがある。
  - e.g.
    - capitalize: 先頭を大文字に
    - upper , lower
    - default(): 指定オブジェクトが空の場合に表示する文字列を指定
    - urlize(target=''): ハイパーリンク設定
    - format(): python string の format と同じ
      - `{{"%s(%s)"|format(user['name'], user['age'])}}`
    - first/last: 指定したオブジェクト(list) の先頭、末尾要素を取得
      - `{{users|first}}`
    - sort: 指定したオブジェクト(list)をソートする
      - `{{users|sort|last}}`
    - random
      - `{{users|random}}`
    - reverse
      - `{{users|reverse}}`
    - replace
      - `{{user|replace('taro', 'jiro')}}`
- テンプレートのカスタムフィルタ
  - サーバー側でフィルタを定義。ノリはルーティングと同じ。
  - `@app.template_filter('my_filter')` デコレータをつけてやる。引数は文字列1つ。返り値も文字列。
  - テンプレートファイル内で、ビルトインと同様に呼び出せる。
- コメントアウト
  - `{#}` を先頭に置く、または `{# / #}` で囲む。
- **=== end Jinja2 ===**
- Flaskの画面遷移とエラーハンドラー
  - `url_for`: 指定したendpoint(関数名)でURLを作成して、返す
    - e.g.: `<a href="{{url_for('func') }}>New Page</a>`
    - e.g.: `<img src="{{url_for('static', filename='xx.jpg')}}>`
  - `errorhandler`: デコレーとした関数をエラー発生時に呼び出すように登録する
    - `abort` と組み合わせて使う。
  - `abort`: 指定した status でHTTPExeptionを発生させる
  - `redirect`: 別のURLにクライアントをリダイレクトさせる

```python
@app.errorhandler(404)
def page_not_found(error):
    error_desc = error.desctiption
    print(error_desc)
    return render_template('not_found.html'), 404
# ...

@app.route('/user/<string:user_name>')
def user(user_name: str):
    if user_name in ['taro', 'jiro', 'goro']:
        return redirect(url_for('home', user_name=user_name))
    else:
        abort(404, 'You cannot redirect to the page.')
        # error.desctiption で文字列を取得できる。

```

- **=== start Flask Form ===**
- Flask の Form
  - ログイン画面やデータ入力で使われるもの
  - ファイルアップロードなど
  - セキュリティ対策、バリデーションを簡易的に行える wtforms というものがある
  - ModelからDBに安全にデータを入れるためにFormをよく理解する必要がある。

![img5](images/img5.png)

- ...

- **=== end Flask Form ===**


