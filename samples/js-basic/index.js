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

