const fName='sina';
let num1: number = 10;

// Arrays 
// let numbers: [1, 2, 3, 4] = [1, 2, 3, 4];
let numbers: number[] = [1, 2, 67, 9, 7];

// Any Type
// Dont use any type because you will lose almost every feature 
// provided in Typescript
let a:any
let b

a=10;
a='sina';
b=20;
b='reza';

// Objects 
const person:{
    name:string;
    code:number;
    isStudent?:boolean
}={
    name:'sina',
    code:101
}
person.isStudent=false


