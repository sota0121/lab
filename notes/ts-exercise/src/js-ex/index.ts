

export const mainJsExercise = () => {
  console.log("========================================================");
  console.log("\tJavaScript Exercise");
  console.log("========================================================");
  // ============================================================
  // Exercise 1
  // const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
  // ============================================================
  console.log("** Exercise 1");
  const a = { a: 'a' };
  const b = { b: 'b' };
  const c = { ...a, ...b };
  console.log(c);

  // ============================================================
  // Exercise 2
  // const arry = ['aa','bb','cc','dd','ee','ff','gg'];
  // のdd,ee,ffを新たな配列として返してください
  // ============================================================
  console.log("** Exercise 2");
  const arry = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
  const extracted = arry.slice(3, -1);
  console.log(extracted);

  // ============================================================
  // Exercise 3
  // ['a','b’] の要素をconsole出力してください e.g 'a'と'b'
  // == Note ==
  // - forEach が適切。forEachは全要素に対して何か処理をする。mapは各要素に対して処理をした上で新しい配列を返す。
  // ============================================================
  console.log("** Exercise 3");
  const arryEx3 = ['a', 'b'];
  // not good
  // arryEx3.map((val: string) => {
  //   console.log(val);
  // });
  arryEx3.forEach((val: string) => {
    console.log(val);
  })

  // ============================================================
  // Exercise 4
  // ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
  // ============================================================
  console.log("** Exercise 4");
  const arryEx4 = ['a', 'b'];
  arryEx4.forEach((val: string, index: number) => {
    console.log(val + index.toString());
  })

  // ============================================================
  // Exercise 5
  // 任意の変数名の[1,2]を定義して配列かどうかを評価してください e.g true
  // ============================================================
  console.log("** Exercise 5");
  const arrEx5 = [1, 2];
  if (Array.isArray(arrEx5)) {
    console.log("true");
  } else {
    console.log("false");
  }

  // ============================================================
  // Exercise 6
  // //1
  // if (typeof x === 'undefined') {
  //   ???
  //  }
  //
  // //2
  // if(x === undefined){
  //  ???
  // }
  // x が定義されていないとき 1, 2 は実行されるか？
  // ============================================================
  console.log("** Exercise 6");
  try {
    if (typeof x === 'undefined') {
      console.log("1 executed");
    }
    if (x === 'undefined') {
      console.log("2 executed");
    }
  } catch (e) {
    console.log(`erro: ${e}`);
  } finally {
    console.log("1は実行されるけど、2は実行されない");
  }

  // ============================================================
  // Exercise 7
  // //1
  // let x;
  // if (x === void 0) {
  // }

  // //2
  // // 直前まで y は宣言されていない
  // if (y === void 0) {
  // }
  // 1, 2 は実行されるか？
  // ====
  // == Notes ==
  // - void は void expression | void(expression) という形式で利用する
  // - void をかますことで、戻り値が必ず undefined になる。
  // - ざっくりいうと、なにか無効化したいときの処理に使う
  // ============================================================
  console.log("** Exercise 7");

  try {
    // 1
    let x;
    if (x === void 0) {
      console.log("1 executed");
    }

    // 2
    if (y === void 0) {
      console.log("2 executed");
    }

  } catch (e) {
    console.log(`error : ${e}`);
  } finally {
    console.log("1は実行されるが、2は実行されない");
  }


  // ============================================================
  // Exercise 8
  // const obj = {
  //  key: 'aa',
  //  key2: 'bb'
  // }
  // の中のkeyとvalueを自身のプロパティのみ全て出力しなさい
  // ============================================================
  console.log("** Exercise 8");

  const objEx8 = {
    key: 'aa',
    key2: 'bb'
  };
  // ↓↓ error: Uncaught TypeError: objEx8 is not iterable
  // [...objEx8].forEach((val) => {
  //   console.log(val);
  // });

  // Collect Answer
  for (let key in objEx8) {
    if (objEx8.hasOwnProperty(key)){
      console.log(key, objEx8[key]);
    }
  }

  // Second Answer
  for (let key of Object.keys(objEx8)) {
    if (objEx8.hasOwnProperty(key)){
      console.log(key, objEx8[key]);
    }
  }

  // ============================================================
  // Exercise 9
  // ['a', 'b', 'c'] 配列の中の全ての要素を結合し、1つの文字列として出力してください。
  // ============================================================
  console.log("** Exercise 9");
  const arrEx9 = ['a', 'b', 'c'];
  const concatnated = arrEx9.reduce((prev, cur) => {
    return prev + cur;
  }, '');
  console.log(concatnated);

  // Collect answer
  console.log(arrEx9.join(""));

  // ============================================================
  // Exercise 10
  // x = 43
  // let y = 3
  // の2つの変数。deleteできるのはどちらですか？
  // ============================================================
  console.log("** Exercise 10 - skipped");
  // try {
  //   x = 43;
  //   let y = 3;
  //   delete x;
  //   delete y;
  // } catch (e) {
  //   console.log(`error: ${e}`);
  // } finally {
  //   console.log("xは undefined だから delete できない。y はできる。")
  // }

  console.log("[deno] strict mode では delete が使えない")


}
