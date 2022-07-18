

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

  // ============================================================
  // Exercise 11
  // let arry =[
  // {id:1,name:'morita'},
  // {id:2,name:'kenji'},
  // {id:4,name:'uro'},
  // {id:3,name:'ken'}
  // ];
  // をid番号が若い順にソートしたオブジェクトを含む配列を出力してください
  // == Note ==
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // Github Gistの回答より、自分の回答の方がよい。0 を明示的に記述しているため。
  // ============================================================
  console.log("** Exercise 11");

  const arryEx11 = [
    { id: 1, name: "morita" },
    { id: 2, name: "kenji" },
    { id: 4, name: "uro" },
    { id: 3, name: "ken" },
  ];
  const retEx11 = arryEx11.sort((former, latter) => {
    if (former.id > latter.id) {
      return 1;
    }
    if (former.id < latter.id) {
      return -1;
    }
    return 0;
  });
  retEx11.forEach((val) => {
    console.log(val);
  })

  // ============================================================
  // Exercise 12
  // a, bの変数はデフォルトとしてaは5、bは7を持ち、aに1を代入してconsole出力してください。
  // - 問題文の意味がわからない…
  // - 答えを見る限り "プロパティa, b を持つオブジェクトを出力してください。ただしオブジェクト初期値はa=5,b=7とし、aのみに1を代入すること" と言いたかったのかな。
  // ============================================================
  console.log("** Exercise 12");

  const funcEx12 = (a = 5, b = 7) => {
    console.log(`a: ${a}, b: ${b}`);
  };
  funcEx12(1);

  // answer
  const objEx12 = { a: 5, b: 7};
  objEx12.a = 1;
  console.log(objEx12)


  // ============================================================
  // Exercise 13
  // next()を実行しただけ返り値が1増える関数を定義してください
  // == Note ==
  // Closureを使うのがポイント - Closure を使えばお手軽に1関数でClassを作ることができる
  // https://typescript-jp.gitbook.io/deep-dive/recap/closure
  // ============================================================
  console.log("** Exercise 13");

  let stateEx12 = 0;
  const next = () => {
    stateEx12++;
    return stateEx12;
  };

  const loopEx12 = 3;
  for (let i = 0; i < loopEx12; i++) {
    const val = next();
    console.log(`i: ${i}, val: ${val}`);
  }

  // good answer with closure
  const nextOther = () => {
    let val = 0;
    return () => { 
      val++;
      return val;
    }
  }

  console.log("Solution with using Closure")
  const nextOne = nextOther();
  for (let i = 0; i < loopEx12; i++) {
    const val = nextOne();
    console.log(`i: ${i}, val: ${val}`);
  }

  // ============================================================
  // Exercise 14
  // fun(1,2,3)を実行したら引数が全て配列で返る関数funを定義しなさい
  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  // == Note ==
  // Array.from() を使ってほしかったらしい
  // == Note ==
  // いきなりでてきた arguments は関数の引数を表すビルトイン変数らしい
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/arguments
  // ただし、deno-ts だとエラーになる
  // deno-ts (2304) Can't find name `arguments`
  // == Note ==
  // typescript 可変長引数 https://9cubed.info/article/typescript/0017
  // ============================================================
  console.log("** Exercise 14");

  const funEx14 = (a: number, b: number, c: number) => {
    return [a, b, c];
  }
  const retEx14 = funEx14(1, 2, 3);
  console.log(retEx14);

  console.log("using Array.from() static method")
  const funEx14p2 = (...args: number[]) => {
    return Array.from(args);
  }
  const retEx14p2 = funEx14p2(1, 2, 3);
  console.log(retEx14p2);

  // ============================================================
  // Exercise 15
  // const array = ['a1','a2','a3','a4','a5']
  // の0〜2番目の要素をそれぞれ
  // red, green, yellow
  // に置き換えて配列にしてください。また実行した際の返り値を教えてください
  // ============================================================
  console.log("** Exercise 15");

  const arryEx15 = ['a1','a2','a3','a4','a5'];
  const startIndex = 0;
  const replacedValue = ['red', 'green', 'yellow'];

  const funEx15 = (arr: string[], start: number, rep: string[]) => {
    if (arr.length - 1 < start) {
      console.log("Err: start index is too large.")
      return arr;
    }
    if (arr.length < (start + rep.length)) {
      console.log("Err: rep is too long.")
      return arr;
    }
    // 思ったようにうごかない。 ['red', 'green', 'yellow', undefined, undefined] が返ってくる
    const ret = arr.map((val, index) => {
      if ((start <= index) || index <= (start + rep.length)) {
        return rep[index - start];
      }
      return val;
    })
    return ret;
  }
  const retEx15 = funEx15(arryEx15, startIndex, replacedValue);
  console.log(retEx15);

  // Good answer with using splice
  console.log("collect answer with using splice()")
  arryEx15.splice(startIndex, (replacedValue.length - 1), ...replacedValue);
  console.log(arryEx15);


  // ============================================================
  // Exercise 16
  // const array = ['a1','a2','a3','a4','a5']
  // のインデックス2〜4の要素を取り出し、 配列として出力しなさい。 実行された後のarrayの要素を教えてください
  // ============================================================
  console.log("** Exercise 16");
  const arryEx16 = ['a1','a2','a3','a4','a5']
  const startIndexEx16 = 1;
  const endIndexEx16 = 3;

  const retEx16 = arryEx16.filter((val, index) => {
    return (startIndexEx16 <= index) && (index <= endIndexEx16);
  })
  console.log(retEx16);

  // other solution - using slice
  console.log("other solution - using slice()")
  const newArryEx16 = arryEx16.slice(1, 4);
  console.log(newArryEx16);


  // ============================================================
  // Exercise n
  // ============================================================
  console.log("** Exercise n");
}
