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




