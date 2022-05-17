// ==========================================================================
// Variable declarations
// ==========================================================================

console.log('===== const, let で変数宣言せよ ======');
console.log('- var: mutable / redeclarable');
console.log('- let: mutable / not redeclarable');
console.log('- const: imutable / not redeclarable');
var a = 1;
console.log(`a = ${a}`);
var a = 2;
console.log(`a = ${a}`);

let b = 1;
console.log(`b = ${b}`);
b = 2;
console.log(`b = ${b}`);

// let b = 3; // SyntaxError: Identifier 'b' has already been declared

const c = 1;
console.log(`c = ${c}`);
// c = 2; // TypeError: Assignment to constant variable.


console.log('ただし、const はオブジェクト・配列・関数などの場合、値の変更は可能');
const d = {
    a: 1,
    b: 2
}
console.log(`d.a = ${d.a}`);
d.a = 3;
console.log(`d.a = ${d.a}`);

const e = [1, 2, 3];
console.log(`e[0] = ${e[0]}`);
e[0] = 4;
console.log(`e[0] = ${e[0]}`);


// ==========================================================================
// Allow function
// ==========================================================================
// 従来の関数定義
console.log('===== 従来の関数定義 ======');
function f1_old(value) {
    return value;
}
console.log(`f1_old(1) = ${f1_old(1)}`);

const f2_old = function(value) {
    return value;
}
console.log(`f2_old(1) = ${f2_old(1)}`);

// Arrow function
console.log('===== Arrow function ======');
const f1_arrow = (value) => {
    return value;
}
console.log(`f1_arrow(1) = ${f1_arrow(1)}`);

console.log('> 引数が一つならカッコを省略できる。')
const f2_arrow = value => {
    return value;
}
console.log(`f2_arrow(1) = ${f2_arrow(1)}`);

console.log('> 処理が1行なら、{} と return を省略できる。')
const f3_arrow = value => value;
console.log(`f3_arrow(1) = ${f3_arrow(1)}`);

console.log('() で囲むと複数行を単一行とみなせるため、{} と return を省略できる。')
const f4_arrow = (val1, val2) => (
    {
        name: val1,
        age: val2
    }
)
console.log(`f4_arrow("foo", 10) = ${JSON.stringify(f4_arrow("foo", 10))}`);


// ==========================================================================
// 分割代入
// ==========================================================================
console.log('===== 分割代入 ======');
console.log('> オブジェクト')
const myProfile = {
    name: 'foo',
    age: 10
}
console.log(`myProfile = ${JSON.stringify(myProfile)}`);
const { name, age } = myProfile;
console.log('const { name, age } = myProfile;');
console.log(`name = ${name} / age = ${age}`);

console.log('> 配列')
const myArray = ['adam', 'male', 20];
console.log(myArray)
const [name0] = myArray
const [name1, gender0] = myArray
const [name2, gender1, age1] = myArray

console.log(`name0 = ${name0}`)
console.log(`name1 = ${name1} / gender0 = ${gender0}`)
console.log(`name2 = ${name2} / gender1 = ${gender1} / age1 = ${age1}`)

console.log('> 存在しない要素など、デフォルト値を設定できる')
const [name3, gender2, age2, desc = 'description'] = myArray
console.log(`name3 = ${name3} / gender2 = ${gender2} / age2 = ${age2} / desc = ${desc}`)


// ==========================================================================
// スプレッド構文
// ==========================================================================
console.log('===== スプレッド構文 ======');
console.log('> 要素を展開する (like xargs)')
const myArray1 = [1, 2, 3];
console.log(`myArray1 = ${myArray1}`);
console.log('...myArray1 = ');
console.log(...myArray1);

console.log('> 要素をひとまとめにする（like unpack all syntax in python）')
const myArray2 = [1, 2, 3, 4, 5];
console.log(`myArray2 = ${myArray2}`);
const [n1, n2, ...rest] = myArray2;
console.log('const [n1, n2, ...rest] = myArray2;');
console.log(`n1 = ${n1} / n2 = ${n2} / rest = ${rest}`);

console.log('')
console.log('> 配列を安全にコピーすることができる（イコールコピーだと参照になってしまう）')
const myArray3 = [...myArray2];
console.log('const myArray3 = [...myArray2];');
console.log(`myArray3 = ${myArray3}`);

console.log('')
console.log('> 配列を安全に結合することができる')
const myArray4 = [...myArray2, ...myArray3];
console.log('const myArray4 = [...myArray2, ...myArray3];');
console.log(`myArray4 = ${myArray4}`);
