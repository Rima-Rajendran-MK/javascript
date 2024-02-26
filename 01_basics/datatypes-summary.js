/*Primitve and non primitive datatypes
Datatypes are categorized on the basis of the way in which data is stored in memory and accessed

Primitive(call by value - the reference of the original value is not taken instead a copy of the value is taken and changed according to our needs) - 7 types
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

Non Primitive(reference type) - return value is always object
We can allocate its reference in the memory directly
1. Array
2. Objects
3. Functions*/

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
