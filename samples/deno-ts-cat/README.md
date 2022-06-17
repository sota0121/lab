# Deno TypeScript Sample - cat cmd

## Run scripts

    deno run --allow-read samples/deno-ts-cat/cat.ts

## Compile scripts

### Normal

    deno run --allow-read samples/deno-ts-cat/cat.ts

### Cross compilation

- currently supported
  - **x86_64-unknown-linux-gnu, x86_64-pc-windows-msvc, x86_64-apple-darwin, aarch64-apple-darwin**
  - to check the latest supported platforms, please check the command output of `deno compile -h`.

    deno run --allow-read samples/deno-ts-cat/cat.ts --target=$(TARGET)
