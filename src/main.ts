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
printName({ name: 'Reza', age: 26 })

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
    console.log(name,isBoy, age)
    return //some code
}

showDetail('naser',{isBoy:true,age:45})

function sum(...numbers:number[]){
    console.log(numbers)
}
sum(8,5,9,4,5)
