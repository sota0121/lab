# りあクト! 学習ノート

## Resources

- りあクト! pt1
- りあクト! pt2
- りあクト! pt3

## Table of Contents

1. relearn-ts-js-basic
   1. pt1 / 2-1 ~ 2-9, 4-2 ~ 4-7
   2. [relearn-ts-js-basic/NOTE.md](relearn-ts-js-basic/NOTE.md)
2. functional-programming
   1. pt1 / 3-1 ~ 3-3
3. tsconfig
   1. pt1 / 4-8
4. ESLint
   1. とりあえずは書籍の通りに書いてみる
   2. `eslint-prettier/.eslintrc.js`
5. Prettier
   1. とりあえずは書籍の通りに書いてみる
   2. `eslint-prettier/.prettierrc.js`

---

## ESLint

use this

- (empty folder)
- `yarn init`
- `yarn add typescript`
- `yarn add eslint`
- ====
- `yarn eslint --init`
- `To check syntax, find problems, and enforce code style`
- `JavaScript modules (import/export)`
- `React`
- `(TypeScript?) Yes`
- `Browser`
- `Use a popular style guide`
- `Airbnb`
- `config file -> JavaScript`
- `install now ? -> Yes`
- `(select) yarn`
- ===
- `typesync`
- `yarn`

### Customize .eslintrc.js

```js
    extends: [
        'plugin:react/recommended',
        'airbnb',
+       'airbnb/hooks',
+       'plugin:import/errors',
+       'plugin:import/warnings',
+       'plugin:import/typescript',
+       'plugin:@typescript-eslint/recommended',
+       'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
```

### V6 react-router-dom

- Document: https://reactrouter.com/docs/en/v6/getting-started/overview

- React Router v6 tutorial
  - https://reactrouter.com/docs/en/v6/getting-started/tutorial