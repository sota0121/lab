// ==========================================================================
// Variable declarations
// ==========================================================================

console.log('\n===== const, let で変数宣言せよ ======');
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
console.log('\n===== 従来の関数定義 ======');
function f1_old(value) {
    return value;
}
console.log(`f1_old(1) = ${f1_old(1)}`);

const f2_old = function(value) {
    return value;
}
console.log(`f2_old(1) = ${f2_old(1)}`);

// Arrow function
console.log('\n===== Arrow function ======');
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
console.log('\n===== 分割代入 ======');
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
console.log('\n===== スプレッド構文 ======');
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

console.log('> 配列を安全にコピーすることができる（イコールコピーだと参照になってしまう）')
const myArray3 = [...myArray2];
console.log('const myArray3 = [...myArray2];');
console.log(`myArray3 = ${myArray3}`);

console.log('> 配列を安全に結合することができる')
const myArray4 = [...myArray2, ...myArray3];
console.log('const myArray4 = [...myArray2, ...myArray3];');
console.log(`myArray4 = ${myArray4}`);


// ==========================================================================
// オブジェクト省略記法
// ==========================================================================
console.log('\n===== オブジェクト省略記法 ======');
console.log('> プロパティ名と変数名が同一なら、プロパティ名を省略できる')

const name4 = 'adam';
const age4 = 12;

const user0 = {
    name: name4,
    age: age4
}

const user1 = {
    name4,
    age4
}

console.log(`user0 = ${JSON.stringify(user0)}`);
console.log(`user1 = ${JSON.stringify(user1)} (省略系)`);


// ==========================================================================
// map / filter
// ==========================================================================
// 従来のfor
console.log('\n===== 従来のfor文 ======');
const names = ['adam', 'barbara', 'chris', 'david'];
for (let i = 0; i < names.length; i++) {
    console.log(`${i}: ${names[i]}`);
}
console.log('')

// map
console.log('> map: 各要素に処理を行い、結果を配列で返す')
console.log('> 引数には、コールバック関数を記述。Arrow function を使うのが一般的')
console.log('> python の map と同じ、気持ち的には 内包表記の雰囲気で使う')
names.map((name, i, arr) => console.log(`${i}: ${name} (length: ${arr.length})`));
console.log('')

// filter
console.log('> filter: 各要素に処理を行い、結果がtrueの要素だけを配列で返す')
console.log('> 使い方は map と同じ')
console.log('> python の内包表記で if を追加したときのようなイメージ')
console.log(' -- get only index is even')
const filteredNames = names.filter((name, i, arr) => {
    return i % 2 == 0;
});
filteredNames.map((name, i, arr) => console.log(`${i}: ${name} (length: ${arr.length})`));


// ==========================================================================
// && / ||
// ==========================================================================
console.log('\n===== && / || ======');
console.log('> &&: 左辺がfalseなら、右辺は実行されない')
console.log('> --- 左辺がtrueなら、右辺は実行される')
const num1_1 = 100;
const num1_2 = null;
const label1 = 'label1';
const fee1_1 = num1_1 && label1;
console.log(`fee1_1 = ${fee1_1}`);
const fee1_2 = num1_2 && label1;
console.log(`fee1_2 = ${fee1_2}`);


console.log('> ||: 左辺がtrueなら、右辺は実行されない')
console.log('> --- 左辺がfalseなら、右辺は実行される')
const num2_1 = null;
const num2_2 = 100;
const label2 = 'label2';
const fee2_1 = num2_1 || label2;
console.log(`fee2 = ${fee2_1}`);
const fee2_2 = num2_2 || label2;
console.log(`fee2_2 = ${fee2_2}`);
