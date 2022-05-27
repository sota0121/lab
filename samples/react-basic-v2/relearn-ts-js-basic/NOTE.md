# Note

## Can't use console.log() in ts

```
TSError: ⨯ Unable to compile TypeScript:
index.ts:3:1 - error TS2584: Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
```

### Solution

- https://bobbyhadz.com/blog/typescript-cannot-find-name-console


1. [Case Node] `install @types/node`
2. [Case Browser] `tsconfig.json > lib > dom` (create `tsconfig.json` with `tsc --init`)


## Enable noImplicitAny

- 引数の型定義がない場合、`any` になる
- これを `noImplicitAny` にすると、`any` にならない


`tsconfig.json`

```json

+ "noImplicitAny": true,
```
