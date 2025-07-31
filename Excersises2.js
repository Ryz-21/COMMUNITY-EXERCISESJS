
//Question 1: Write a code that will create variables and
 //initialize them with values of Boolean, Number, BigInt, 
// String, and undefined types using 
//(when possible) literals and constructor functions

/*
let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;
*/

//Question 2: Print all values and all types of those 
//  using console.log. Try to use string interpolation to display
//  the value and type at the same time with a single console.log 
// call, e.g. in the following form: 1000 [number]
/*

console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);
*/

//Question 3: Carry out a chain of conversions: create a Boolean
//  from a BigInt created from a Number that was created from a
//  String. Start with the value "1234". Is it possible?

/*
let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} [${typeof b}]`);

*/
//Question 4: Try adding two values of the same type and check 
//the result type. Try it for all primitive types.

let b = true * false;
let n _= 100 + 200;
let bi = 100n + 200n;
let s = "he" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); // !!! number 
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // !!! number

//Question 5: Try adding two values of different types and check 
//the results.

