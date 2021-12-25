# Getting started

## Tutorial Notes

### Resources

https://www.typescripttutorial.net/

### Note

install ts compiler globally

```bash
npm install -g typescript
tsc --v
```

how to run

```bash
# compile > main.js
tsc main.ts
# run
node main.js
# out>Hello, World!
```


```bash
# compile and run (a little bit slower than above pattern)
ts-node main.ts
# out>Hello, World!
```

## Create CLI with TypeScript

### Resources

https://qiita.com/suzuki_sh/items/f3349efbfe1bdfc0c634

### Note

setup

```bash
mkdir ts-cat
cd ts-cat
#git init
curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore > .gitignore
```

#### create ts build env with webpack

make package.json

```
npm init
> package name: (ts-cat)
> version: (1.0.0)
> description: cat command in typescript
> entry point: (index.js)
> test command:
> git repository:
> keywords:
> author: sota_masuda
> license: (ISC) MIT
```

> TypeScriptと、ビルドするために必要なパッケージを、devDependenciesでインストールします。
> 今回はwebpackを使うため、ts-loaderもインストールします。

```
npm install --save-dev webpack webpack-cli typescript ts-loader
> node_modules/ will be made
> package-lock.json will be maide
> package.json will be updated
```

> TypeScriptの設定であるtsconfig.jsonを作成します。
> 手動で作成しても良いですが、$ tsc --initで自動生成することもできます。

```
./node_modules/typescript/bin/tsc --init
```

> webpackの設定であるwebpack.config.jsを作成します。

```js
module.exports = {
    entry: './src/index.ts',
    target: 'node',
    module: {rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};
```

#### Coding

install nodejs's types

```
npm install --save-dev @types/node
```

make code's dir

```
mkdir src
code src/index.ts
```

#### Prepare to build

> webpackでビルドするnpm scriptを記述します。
(It looks like Makefile ...)

```json
   "scripts": {
+    "build": "webpack",
```


### build and run

```
npm run build
> dist/index.js will be made


asset main.js 144 bytes [emitted] [minimized] (name: main)
./src/index.ts 300 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

I got 1 warning.

set `mode` option in `webpack.config.js`

ref : https://webpack.js.org/configuration/mode/

```js
module.exports = {
    mode: 'development',
};
```

Successfully built

```bash
$ npm run build

> ts-cat@1.0.0 build
> webpack

asset main.js 1.5 KiB [emitted] (name: main)
./src/index.ts 300 bytes [built] [code generated]
webpack 5.65.0 compiled successfully in 1851 ms
```

