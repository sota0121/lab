// js basic
const clone = require('rfdc')()

console.log('\n==============================');
console.log(' Primitive types');
console.log('==============================');
// Boolean
const isDone = false;
console.log(`isDone: ${isDone}`);
// Number
const decimal = 6;
const hex = 0xf00d;
const binary = 10;
console.log(`decimal: ${decimal}`);
console.log(`hex: ${hex}`);
console.log(`binary: ${binary}`);
// BigInt
const bigInt = 12345n;
console.log(`bigInt: ${bigInt}`);
// String
const fullName = 'Bob Bobbington';
console.log(`fullName: ${fullName}`);
// Simbol (like a hash)
const sym = Symbol('Bob');
console.log(`sym (from Bob): ${sym.toString()}`);

console.log('\n==============================');
console.log(' Literals and Objects');
console.log('==============================');
const arr = [1, 2, 3];
console.log(`arr: ${arr}`);
const obj = {'a': 1, 'b': 2};
console.log(`obj: ${obj}`);
const regex = /[a-z]/;
console.log(`regex: ${regex}`);


console.log('\n==============================');
console.log(' Definie Functions');
console.log('==============================');

// Anonymous function
const square = function (x) {
  return x * x;
}
console.log(`square.name: ${square.name}`);
const af_name = (function (x) {return x * x}).name
console.log(`(function (x) {return x * x}).name: ${af_name}`);

// Arrow function
const squareArrow = (x) => {
  return x * x;
}
console.log(`squareArrow(3): ${squareArrow(3)}`);

// Default Arguments
const add = (x, y = 1) => {
    return x + y;
}
console.log(`add(1): ${add(1)} -- (x, y = 1)`);


console.log('\n==============================');
console.log(' Classes');
console.log('==============================');

class Bird {
    constructor(name) {
        this.name = name;
    }
    chirp = () => {
        console.log(`${this.name} is chirping`);
    };
    static explain(name) {
        console.log(`${name} has 2 legs`);
    }
}

class FlyingBird extends Bird {
    constructor(name) {
        super(name);
    }
    fly = () => {
        console.log(`${this.name} is flying`);
    }
}

const penguin = new Bird('penguin');
penguin.chirp();
Bird.explain('Crow');

const hawk = new FlyingBird('hawk');
hawk.chirp();
hawk.fly();


console.log('\n==============================');
console.log(' What is Prototyp-based class?');
console.log('==============================');
console.log('\nPrototyp-based class is a class that uses the prototype property to store methods and properties.');
console.log('The prototype property is a reference to an object that is shared among all instances of a class.');
console.log('proto をたどっていくと、最終的に null になる。\n');
console.log(`hawk.__proto__: ${hawk.__proto__}`);
console.log(`hawk.__proto__.__proto__: ${hawk.__proto__.__proto__}`);
console.log(`hawk.__proto__.__proto__.__proto__: ${hawk.__proto__.__proto__.__proto__}`);
console.log(`hawk.__proto__.__proto__.__proto__.__proto__: ${hawk.__proto__.__proto__.__proto__.__proto__}`);


console.log('\n==============================');
console.log(' Spread Operator');
console.log('==============================');

const key = 'bar';
const baz = 65535;
const obj1 = { foo: 256, [key]: 4096, baz: baz}
console.log('const obj1 = { foo: 256, [key]: 4096, baz: baz}');
console.log(obj1);

const obj3 = { foo: 256, key: 4096, baz: baz}
console.log('const obj3 = { foo: 256, key: 4096, baz: baz}');
console.log(obj3);

console.log('const key = \'bar\'')
console.log(`[key] is : ${[key]}`);

const obj2 = { baz };
console.log('-- Property name shorthand --');
console.log('const obj2 = { baz };');
console.log(obj2);

console.log('-- 分割代入 / Destructuring assignment --');
const [n, m] = [1, 2];
console.log('const [n, m] = [1, 2];');
console.log(`n, m: ${n}, ${m}`);

const obj4 = { username: 'Bob', age: 30 };
const { username, age } = obj4;
console.log('const obj4 = { username: \'Bob\', age: 30 };');
console.log('const { username, age } = obj4;');
console.log(`name, age: ${username}, ${age}`);

console.log('-- e.g. list of object --')
const response1 = {
    status: 200,
    data: [
        {
            id: 1,
            name: 'Bob',
            email: 'bob@test.com',
        },
        {
            id: 2,
            name: 'Alice',
            email: 'alice@test.com',
        },
        {
            id: 3,
            name: 'John',
            email: 'john@test.com',
        }
    ],
}

// まず data プロパティを取得している
// 次に、data のままではなく users という名前に変更している
// data がない場合に備えて、デフォルトとして [] を設定している
const { status, data: users = [] } = response1;
console.log('const { status, data: users = [] } = response1;')
console.log(`status: ${status}`);
console.log('users:');
console.log(users);


console.log('-- spread operator --');
console.log('> array');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
const arr4 = [...arr1, ...arr2, 7, 8, 9];
console.log('const arr1 = [1, 2, 3];');
console.log('const arr2 = [4, 5, 6];');
console.log('const arr3 = [...arr1, ...arr2];');
console.log('const arr4 = [...arr1, ...arr2, 7, 8, 9];');
console.log(`arr3: ${arr3}`);
console.log(`arr4: ${arr4}`);

console.log('> object');
const user = {
    id: 1,
    name: 'Bob',
    email: 'patty@text.com',
    age: 30,
}
const { id, ...userWithoutId } = user;
console.log('const user = { id: 1, name: \'Bob\', email: \'patty@text.com\', age: 30 };');
console.log('const { id, ...userWithoutId } = user;');
console.log(`id: ${id}`);
console.log('userWithoutId:');
console.log(userWithoutId);

console.log('-- Object copy with spread operator --');
console.log('== caution ==')
console.log('Object.assign() is not recommended.');
console.log('spread operator is recommended.');
console.log('spread operator is shallow copy.');
console.log('if you want deep copy, use 3rd party library. e.g. lodash / rfdc');
console.log('[limited] JSON.parse(JSON.stringify()) is not recommended, \n\
because it does not work when the object contains undefined / date / func.');
console.log('== caution ==');

const original = { a: 1, b: 2, c: 3 };
const original2 = { a: 1, b: 2, c: {aa: 1, bb: 2, cc: 'hello'} };
const original3 = { a: 1, b: 2, c: {aa: 1, bb: 2, cc: (x) => {2 * x}} };
console.log('const original = { a: 1, b: 2, c: 3 };');
console.log('const original2 = { a: 1, b: 2, c: {aa: 1, bb: 2, cc: \'hello\'} };');
console.log('const original3 = { a: 1, b: 2, c: {aa: 1, bb: 2, cc: (x) => {2 * x}} };');

const shallow_copy_success = { ...original };
const shallow_copy_fail = { ...original2 };
console.log('const shallow_copy_success = { ...original };');
console.log(shallow_copy_success);
console.log('const shallow_copy_fail = { ...original2 }; --> Success !!');
console.log(shallow_copy_fail);

const deep_copy_bad_success = JSON.parse(JSON.stringify(original2));
const deep_copy_bad_fail = JSON.parse(JSON.stringify(original3));
console.log('const deep_copy_bad_success = JSON.parse(JSON.stringify(original2));');
console.log(deep_copy_bad_success);
console.log('const deep_copy_bad_fail = JSON.parse(JSON.stringify(original3));');
console.log(deep_copy_bad_fail);

const deep_copy_good_success = clone(original2);
const deep_copy_good_success2 = clone(original3);
console.log('const deep_copy_good_success = clone(original2);');
console.log(deep_copy_good_success);
console.log('const deep_copy_good_success2 = clone(original3);');
console.log(deep_copy_good_success2);


console.log('\n==============================');
console.log(' Shortcircuit evaluation');
console.log('==============================');

console.log('-- && --');
console.log('a && b -> if a is true, b is evaluated, otherwise a is returned.');

const hello_and = ' ' && 100 && 'hello';
console.log('const hello_and = \' \' && 100 && \'hello\';');
console.log(`hello_and: ${hello_and}`);

console.log('-- || --');
console.log('a || b -> if a is null/undefined/0/empty-string, b is evaluated.');
const hello_or = undefined || null || 'hello';
console.log('const hello_or = undefined || null || \'hello\';');
console.log(`hello_or: ${hello_or}`);

console.log('-- ?/?? is better than || in some cases --')
const obj5 = {};
console.log(obj.foo); // undefined
// console.log(obj.foo.bar); // TypeError
console.log(obj?.foo?.bar); // undefined (safe)

console.log('Nullish coalescing operator (??)');
console.log('a ?? b -> if a is null/undefined, b is returned.');
const nullish_coalescing1 = null ?? 'hello';
console.log('const nullish_coalescing1 = null ?? \'hello\';');
console.log(`nullish_coalescing1: ${nullish_coalescing1}`);
const nullish_coalescing2 = undefined ?? 'hello';
console.log('const nullish_coalescing2 = undefined ?? \'hello\';');
console.log(`nullish_coalescing2: ${nullish_coalescing2}`);
const nullish_coalescing3 = 0 ?? 'hello';
console.log('const nullish_coalescing3 = 0 ?? \'hello\';');
console.log(`nullish_coalescing3: ${nullish_coalescing3}`);
const nullish_coalescing4 = '' ?? 'hello';
console.log('const nullish_coalescing4 = \'\' ?? \'hello\';');
console.log(`nullish_coalescing4: ${nullish_coalescing4}`);
