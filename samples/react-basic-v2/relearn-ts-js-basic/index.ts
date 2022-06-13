// ts basic

console.log('\n===================================')
console.log(' Variables and Data Types')
console.log('===================================')

const num: number = 1
console.log('const num: number = 1')
console.log(`num: ${num}`)
const num1 = 2
console.log('const num1 = 2')
console.log(`num1: ${num1}`)

const numArray: number[] = [1, 2, 3]
console.log('const numArray: number[] = [1, 2, 3]')
console.log(`numArray: ${numArray}`)
const strArray: string[] = ['a', 'b', 'c']
console.log('const strArray: string[] = ["a", "b", "c"]')
console.log('you can use also \`Array<string>\`, but it\'s not recommended')
console.log(`strArray: ${strArray}`)

console.log('\n-- Object Type Definition --')
const obj: { rgb: string, alpha: number } = { rgb: '#fff', alpha: 1 };
console.log('const obj: { rgb: string, alpha: number } = { rgb: "#fff", alpha: 1 };')
console.table(obj)

console.log('\n-- Interface is useful --')
interface Color {
    readonly rgb: string,
    alpha: number,
    name?: string
}

const colorObj: Color = { rgb: '#fff', alpha: 1 };
colorObj.name = 'white';
// colorObj.rgb = '#000'; // error
console.log('const colorObj: Color = { rgb: "#fff", alpha: 1 };')
console.log('colorObj.name = "white";')
console.table(colorObj)

interface Status {
    // name: string, // Property 'name' of type 'string' is not assignable to 'string' index type 'number'.ts(2411)
    // おそらく [attr: string]... の影響で number / string を混在できない。
    level: number,
    maxHp: number,
    minHp: number,
    [attr: string]: number,
}

const myStatus: Status = {
    level: 30,
    maxHp: 100,
    minHp: 0,
    attack: 10, // add new property
    defense: 10, // add new property
}

console.table(myStatus)


console.log('\n-- Enum and Literals --')
console.log('> enum (int) is unsafe')
enum Pet {
    Cat = 1,
    Dog = 2,
    Bird = 3,
}
console.log('> enum Pet { Cat = 1, Dog = 2, Bird = 3 }')
console.log('Pet.Cat:', Pet.Cat, 'Pet.Dog:', Pet.Dog, 'Pet.Bird:', Pet.Bird)
console.log('Different type value can be assingned to the enum (int)')
let Tom: Pet = Pet.Cat;
console.log('const Tom: Pet = Pet.Cat;')
Tom = 5;
console.log('Tom = 5;')
console.log('Tom:', Tom)

console.log('> enum (string) is safe. But it\'s not recommended')
enum Pet2 {
    Cat = 'cat',
    Dog = 'dog',
    Bird = 'bird',
}
let Tom2: Pet2 = Pet2.Cat;
console.log('> enum Pet2 { Cat = "cat", Dog = "dog", Bird = "bird" }')
console.log('[error] Tom2 = "elephant";')
// Tom2 = 'elephant'; // error
console.log('[error] Tom2 = "bird";')
// Tom2 = 'bird'; // error
console.log('[ok] Tom2 = Pet2.Bird;')
Tom2 = Pet2.Bird;


console.log('> Strongly recommend to use Literal Type for enum')
let Mary: 'cat' | 'dog' | 'bird' = 'cat';
console.log('let Mary: "cat" | "dog" | "bird" = "cat";')
Mary = 'dog'; // ok
console.log('[ok] Mary = "dog";')
// Mary = 'elephant'; // error
console.log('[error] Mary = "elephant";')


console.log('\n-- Tuple --')
const charAttrs: [string, number] = ['bob', 30];
console.log('const charAttrs: [string, number] = ["bob", 30];')
console.log('charAttrs:', charAttrs)

const spells: [number, ...string[]] = [1, 'fire', 'water', 'wind'];
console.log('const spells: [number, ...string[]] = [1, "fire", "water", "wind"];')
console.log('spells:', spells)



console.log('\n===================================')
console.log(' Functions and Classes Type Definition')
console.log('===================================')

const add = (n: number, m: number): number => n + m;
console.log('add(1, 2):', add(1, 2));
const hello = (name: string): void => {
    console.log('hello', name)
};
console.log('hello("bob"):');
hello('bob');

console.log('\n> Callable object type definition')
interface NumOperation {
    (n: number, m: number): number
}
const add2: NumOperation = (n, m) => n + m;
console.log('[interface]')
console.log('interface NumOperation { (n: number, m: number): number }')
console.log('const add2: NumOperation = (n, m) => n + m;')
console.log('add2(1, 2):', add2(1, 2))

console.log();
const add3: (n: number, m: number) => number = (n, m) => n + m;
console.log('[in-line][not-recommended]')
console.log('const add3: (n: number, m: number) => number = (n, m) => n + m;')
console.log('add3(1, 2):', add3(1, 2))


console.log('\n> Callable object type definition - Generics')
const toArray = <T>(arg1: T, arg2: T): T[] => [arg1, arg2];
console.log('const toArray = <T>(arg1: T, arg2: T): T[] => [arg1, arg2];')
console.log('toArray(3, 5): ', toArray(3, 5));
console.log('toArray("bob", "tom"): ', toArray('bob', 'tom'));

console.log('\n> Variably argument function - 可変長引数')
const toArrayVariably = <T>(...args: T[]): T[] => [...args];
console.log('const toArrayVariably = <T>(...args: T[]): T[] => [...args];')
console.log('toArrayVariably(3, 5): ', toArrayVariably(3, 5));
console.log('toArrayVariably("bob", "tom"): ', toArrayVariably('bob', 'tom'));
console.log('toArrayVariably(3, 5, 6, 7): ', toArrayVariably(3, 5, 6, 7));
console.log('toArrayVariably("bob", "tom", "alice", "casandra"): ', toArrayVariably('bob', 'tom', 'alice', 'casandra'));


console.log('\n> Class Type Definition')
console.log('Access Modifier: public(default), private, protected -> the same as in C++')
console.log('readonly modifier -> make property immutable')
console.log('static modifier -> make method static')
console.log('similar to Python dataclass')
class Article {
    private title: string;
    private characters: string[] = [];
    private readonly author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getCharacters(): string[] {
        return this.characters;
    }
    addCharacter(name: string): void {
        this.characters.push(name);
    }
    static getAuthorStatic(): string {
        return 'bob';
    }
}

const a = new Article('EarthMind', 'Sota');
console.log('const a = new Article("EarthMind", "Sota");')
console.log('a.getTitle():', a.getTitle())
console.log('a.getAuthor():', a.getAuthor())
console.log('a.getCharacters():', a.getCharacters())
a.addCharacter('bob alice tom');
console.log('a.addCharacter("bob alice tom"):')
console.log('a.getCharacters():', a.getCharacters())

console.log('\n------------------------------------------------------------------------')
console.log('[Message] Absolutely recommend to use Composition instead of Inheritance')
console.log('------------------------------------------------------------------------')

console.log('\n> Composition than Inheritance')
class Rectangle {
    readonly name: string = 'Rectangle';
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea = (): number => this.width * this.height;
}

class SquareInheritance extends Rectangle {
    constructor(width: number) {
        super(width, width);
    }
}

class SquareComposition {
    readonly name: string = 'Square';
    width: number;
    constructor(width: number) {
        this.width = width;
    }

    getArea = (): number => new Rectangle(this.width, this.width).getArea();
}

const sqInh = new SquareInheritance(10);
console.log('[Bad Example]')
console.log('const sqInh = new SquareInheritance(10);')
console.log('sqInh.getArea():', sqInh.getArea())
console.log('sqInh.name:', sqInh.name)

const sqCmp = new SquareComposition(10);
console.log('[Good Example]')
console.log('const sqCmp = new SquareComposition(10);')
console.log('sqCmp.getArea():', sqCmp.getArea())
console.log('sqCmp.name:', sqCmp.name)


console.log('\n> Split interface and implementation')
interface Shape {
    readonly name: string;
    getArea(): number;
}

interface Quadrangle {
    sideA: number;
    sideB?: number; // optional property
    sideC?: number; // optional property
    sideD?: number; // optional property
}

class Rectangle2 implements Shape, Quadrangle {
    readonly name: string = 'Rectangle';
    sideA: number;
    sideB: number;

    constructor(width: number, height: number) {
        this.sideA = width;
        this.sideB = height;
    }

    getArea = (): number => this.sideA * this.sideB;
}

const rectV2 = new Rectangle2(10, 20);
console.log('const rectV2 = new Rectangle2(10, 20);')
console.log('rectV2.getArea():', rectV2.getArea())



console.log('\n===================================')
console.log(' Type Aliases(recommended) vs Interfaces')
console.log('===================================')

console.log('interface can be extended wherever interface is used')
console.log('this is cons of interfaces')

interface User {
    name: string;
}

interface User {
    age: number;
}

interface User {
    species: 'rabbit' | 'bear' | 'fox';
}

const rolley: User = {
    name: 'rolley',
    age: 10,
    species: 'rabbit'
}

console.log('const rolley: User = { ... };')
console.log('rolley:', rolley)

// --------------------------------------------------

// Type Aliases - [Recommended]
type Unit = 'USD' | 'JPY' | 'EUR' | 'GBP' | 'CNY';
type TCurrency = {
    unit: Unit;
    amount: number;
};

// type TCurrency = { // error
//     name: string;
// };

// Interfaces - [Not Recommended]
interface IUnit {
    unit: Unit;
    amount: number;
}


console.log('\n===================================')
console.log(' Union Types / Intersection Types')
console.log('===================================')

console.log('\n> Union Types')
console.log('|- Union Types can be used to describe a type that can be one of several types')
console.log('|- 複数の型のうち、いずれかの型を使うことができる')
type Id = string | number;
const numId: Id = 1234;
const strId: Id = 'aaijblakjojfaokjdoakjaojf';

console.log('type Id = string | number;')
console.log('const numId: Id = 1234;')
console.log('const strId: Id = "aaijblakjojfaokjdoakjaojf";')

console.log('\n> Intersection Types')
console.log('|- Intersection Types can be used to describe a type that is the intersection of several other types')
console.log('|- 複数の型を合成する。Composition の目的で使う。')
console.log('|- Interface における extends と同じことを Type に対する Intersection Types で実現する。')
type Unit2 = 'USD' | 'JPY' | 'EUR' | 'GBP' | 'CNY';
interface ICurrency2 {
    unit: Unit2;
    amount: number;
}

interface IPayment extends ICurrency2 {
    date: Date;
}

type TPayment = ICurrency2 & {
    date: Date;
};

const date = new Date();
const payA: IPayment = { unit: 'USD', amount: 100, date };
const payB: TPayment = { unit: 'JPY', amount: 1000, date };

console.log('const payA: IPayment = { unit: "USD", amount: 100, date };')
console.log('payA: ', payA)
console.log('const payB: TPayment = { unit: "JPY", amount: 1000, date };')
console.log('payB: ', payB)


console.log('\n===================================')
console.log(' Advanced Types Management')
console.log('===================================')

console.log('\n> typeof operator')
console.log('|- typeof operator can be used to check the type of a variable')
console.log('|- like type() in Python')
console.log('typeof 100:', typeof 100)

const arr = [1, 2, 3];
const numArr: typeof arr = [4, 5, 6];
console.log('const arr = [1, 2, 3];')
console.log('const numArr: typeof arr = [4, 5, 6];')
console.log('typeof numArr:', typeof numArr, '-> number[]')


console.log('\n> Mapped Types')
type Fig = 'one' | 'two' | 'three';
type FigMap = { [key in Fig]: string };
type FigMapN = { [key in Fig]: number };

console.log('type Fig = "one" | "two" | "three";')
console.log('type FigMap = { [key in Fig]: string };')
console.log('type FigMapN = { [key in Fig]: number };')

const figMap: FigMap = {
    one: 'one',
    two: 'two',
    three: 'three'
};
// figMap.four = 'four'; // compile error
console.log('figMap:', figMap)

const figMapN: FigMapN = {
    one: 1,
    two: 2,
    three: 3
};
console.log('figMapN:', figMapN)


console.log('\n> keyof operator')
const permissions = {
    r: 0b001,
    w: 0b010,
    x: 0b100,
}
console.log('permissions:', permissions)
console.log('typeof permissions:', typeof permissions)

type PermsChar = keyof typeof permissions; // 'r' | 'w' | 'x'
const readable: PermsChar = 'r';

console.log('type PermsChar = keyof typeof permissions; // "r" | "w" | "x"')
console.log('const readable: PermsChar = "r";')
console.log('typ readable:', typeof readable)


console.log('\n> Const Assertion (as const)')
console.log('|- 一つ指定するには、プロパティのとなりに as const を書く。')
console.log('|- すべて指定するには、最後に as const を書く。')
console.log('|- as const をつけると、まず対象のプロパティが readonly になる。')
console.log('|- そして、そのプロパティの値がリテラル型になる。')
const permissions_ca = {
    r: 0b001,
    w: 0b010,
    x: 0b100,
} as const;

console.log('const permissions = { r: 0b001, w: 0b010, x: 0b100 };')
console.log('typeof permissions: {number, number, number}')
console.log('const permissions_ca = { r: 0b001, w: 0b010, x: 0b100 } as const;')
console.log('typeof permissions_ca: { 1, 2, 4 }')


console.log('\n> Make type from string literal')
console.log('|- string array を使って、型を作る。')

const species2 = ['cat', 'dog', 'bird'] as const;
type Species2 = typeof species2[number];
console.log('const species2 = ["cat", "dog", "bird"] as const;')
console.log('type Species2 = typeof species2[number];')
console.log('type Species2 = "cat" | "dog" | "bird";')


console.log('\n> Conditional Types --> Difficult to understand')
console.log('|- 型を決めるには、条件を満たす値を持つ型を指定する。')
type User1 = { id: unknown };
type NewUser = User1 & { name: string };
type OldUser = User1 & { name: number };
type Book = { isbn: string };

type IdOf<T> = T extends User1 ? T['id'] : never;
type NewUserId = IdOf<NewUser>; // string
type OldUserId = IdOf<OldUser>; // number
type BookId = IdOf<Book>; // never

console.log('type IdOf<T> = T extends User1 ? T["id"] : never;')
console.log('type NewUserId = IdOf<NewUser>; // string')
console.log('type OldUserId = IdOf<OldUser>; // number')
console.log('type BookId = IdOf<Book>; // never')


console.log('\n> Template Literal Types')
console.log('|- 文字列のフォーマットを型定義できる。')
console.log('|- 日付文字列やクエリ文字列などに型判定を効かせることができる。')

type DateFormat = `${number}-${number}-${number}`;
const date1: DateFormat = '2020-01-01';
// const date2: DateFormat = 'Dec, 5, 2020'; // compile error

console.log('type DateFormat = `${number}-${number}-${number}`;')
console.log('const date1: DateFormat = "2020-01-01"; --> OK')
console.log('const date2: DateFormat = "Dec, 5, 2020"; --> Error')



console.log('\n===================================')
console.log(' Embedded Utility Types')
console.log('===================================')
console.log('\n> Partial<T>\n> Required<T>\n> Readonly<T>\n> Pick<T, K>\n> Omit<T, K>')
console.log('\n> Extract<T, U>\n> Exclude<T, U>\n> NonNullable<T>\n> ReturnType<T>')
console.log('...')


console.log('\n===================================')
console.log(' Overload Functions')
console.log('===================================')

class Person {
    name: string = 'John';
    gender: string = 'male';
}

class Student extends Person {
    className: string = '1A'
    classNumber: number = 20
}

// function info(): void;
// function info(person: Person): void;
// function info(person: Student): void
// function info(person?: Person | Student): void {
//     if (person instanceof Person) {
//         console.log('Person Information is ...')
//         console.log(`Name: ${person?.name}`)
//         console.log(`Gender: ${person?.gender}`)
//     } else if (person instanceof Student ) {
//         console.log('Student Information is ...')
//         console.log(`Name: ${person?.name}`)
//         console.log(`Gender: ${person?.gender}`)
//         console.log(`ClassName: ${person?.className}`)
//         console.log(`classNumber: ${person?.classNumber}`)
//     } else {
//         console.log('person is fake...')
//     }
// }

console.log('Does not work...')


console.log('\n===================================')
console.log(' Type Guards')
console.log('===================================')

console.log('\n> Premitive Types --> Use typeof')
const foo: unknown = '1,2,3,4'
console.log('const foo: unknown = "1,2,3,4"')
if (typeof foo === 'string') {
    console.log('foo is string')
    console.log(foo.split(','))
} else {
    console.log('foo is not string')
}

console.log('\n> Classes --> Use instanceof')
class Base { common: string = 'common' }
class Foo extends Base { foo = () => { console.log('foo') } }
class Bar extends Base { bar = () => { console.log('bar') } }
console.log('class Base { common: string = "common" }')
console.log('class Foo extends Base { foo = () => { console.log("foo") } }')
console.log('class Bar extends Base { bar = () => { console.log("bar") } }')

const doDivide = (arg: Foo | Bar): void => {
    if (arg instanceof Foo) {
        arg.foo()
    } else if (arg instanceof Bar) {
        arg.bar()
    } else {
        console.log('arg is not Foo or Bar')
    }
};
doDivide(new Foo())
doDivide(new Bar())

console.log('\n> User-Defined Type Guard for type')

type UserX = { name: string, age: number }
console.log('type UserX = { name: string, age: number }')
const isUserX = (arg: any): arg is UserX => {
    const u = arg as User;

    return (
        typeof u?.name === 'string' &&
        typeof u?.age === 'number'
    );
};
console.log('arg is UserX --> This is called Type Predicate (型述語)')
console.log('この関数の戻り値がTrueだった場合に、引数 arg が型UserXであるとコンパイラに伝わる')

const u1: unknown = JSON.parse('{}')
const u2: unknown = JSON.parse('{"name": "John", "greet": "hello"}')
const u3: unknown = JSON.parse('{"name": "John", "age": 20}')

const ulist = [u1, u2, u3];
ulist.forEach((u) => {
    if (isUserX(u)) {
        console.log('u is UserX')
    } else {
        console.log('u is not UserX')
    }
    console.log(u);
});
