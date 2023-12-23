const fName = 'sina';
let num1: number = 10;

// Arrays 
// let numbers: [1, 2, 3, 4] = [1, 2, 3, 4];
let numbers: number[] = [1, 2, 67, 9, 7];

// Any Type
// Dont use any type because you will lose almost every feature provided in Typescript
let a: any
let b

a = 10;
a = 'sina';
b = 20;
b = 'reza';

// Objects 
const person: {
    name: string;
    code: number;
    isStudent?: boolean
} = {
    name: 'sina',
    code: 101
}
person.isStudent = false

// Type & Interface

interface Car {
    carName: string,
    model: number,
    company: string
}

type Person = {
    firstName: string,
    code: number,
    adderss: {
        street: string
    }
}


const person2: Person = {
    firstName: 'Ali',
    code: 202,
    adderss: {
        street: 'north st.'
    }
}

const mycar: Car = {
    carName: 'X4',
    model: 2020,
    company: 'BMW'
}

// functions 

// functions that dont return a specific value are void 
function printName(info: { name: string }): void {
    console.log(info.name)
}
// for functions with a return typescript is able to understand the type of return value , but you can also write the type of return value 
function calc(number1: number, number2: number): number {
    return number1 + number2
}

// got error because Im explicitly defining the input values 
// printName({ name: 'Reza', age: 26 })

// but if i do the code below i dont get error 
const info = {
    name: 'Reza',
    age: 26
}
printName(info)

// I also can do this 
type userInformation = {
    name: string;
    age: number;
}
function printUserName(info: userInformation) {
    console.log(info.name)
}
printUserName({ name: 'Ali', age: 30 })

// rest parameters and destructured
type Detail = {
    isBoy?: boolean;
    age?: number;
}

function showDetail(name: string, { isBoy = false, age }: Detail = {}) {
    console.log(name, isBoy, age)
    return //some code
}

showDetail('naser', { isBoy: true, age: 45 })

function sum(...numbers: number[]) {
    console.log(numbers)
}
sum(8, 5, 9, 4, 5)

// Define a function as a variable
function calculation(a: number, b: number, callBack: CalcType) {
    callBack(a + b)
}

calculation(5, 6, (sum) => {
    console.log(sum)
})

type CalcType = (input: number) => void

// Union Types

let x: number | string
x = 10;
x = '10';

type Todo = {
    subject: string;
    status: 'completed' | 'incomplete' | 'draft'
}
type User = {
    id: number;
    name: string;
}

type TodoUser = Todo | User

const myTodo: Todo = {
    subject: 'Typescript',
    status: 'completed'
}

const todoUser: TodoUser = {
    id: 20,
    name: 'sina',
}

// Intersection Types 
// An intersection type is combined of two or more types 

type teacher = {
    name: string;
    age: number;
}
type office = {
    code: number | string;
    phone?: string | number
    address: string
}

// interface position extends teacher, office{}

// type position = teacher & office & { phone: string }
type position = teacher & office

const newTeacher: position = {
    name: 'sina',
    age: 25,
    code: 300,
    address: 'USA',
    // phone: '+1-445-9225-7185'
}

// Read only 
const numberArray: readonly number[] = [2, 3, 947, 41, 2, 48, 10]

// using push method will cause an error because numberArray is read only
// numberArray.push(333) 


// Keyof
// with this property we can access the key and values of a object
type Motor = {
    name: string;
    model: number;
}

const honda: Motor = {
    name: 'cb 1300',
    model: 2020
}

const motorName = getValue("name", honda)
console.log(motorName)
function getValue(key: keyof Motor, object: Motor) {
    return object[key]
}

// Typeof property in typescript is not like Javascript , with typeof in typescript we can set type of a variable to type of another variable

const body = {
    eyeColor: 'black',
    weight: 80
}

const myFirend: typeof body = {
    eyeColor: 'green',
    weight: 70,
}
const peopleInfo: (typeof body)[] = []
peopleInfo.push(myFirend)
peopleInfo.push({ eyeColor: 'yellow', weight: 79 })


// index type
type SkillLevel={
    code:1000,
    level:'beginner'|'intermediate'|'advanced'
}

// instead of writing the function like this 
// function getLevel(level:'beginner'|'intermediate'|'advanced'){
//     console.log(level) 
// }

// you can write it like this one
function getLevel(level:SkillLevel['level']){
    console.log(level) 
}

const array=['text 1','text 2',false]
type GeneralArray=(typeof array)[number]

const q = {
    name: 'sina',
    age: 25,
    isProgrammer: true
}

type Q = (typeof q)[keyof typeof q]
