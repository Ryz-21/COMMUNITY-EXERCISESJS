/*
Exercise 2: Write three functions with the names add, sub, and
 mult, which will take two numerical arguments. The functions are
  to check if the given arguments are integers (use Number.isInteger). 
  If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. 
  The functions are to be declared using a function statement.

Example of use and expected results:
**/

const { useCallback } = require("react");

/*
const { useCallback } = require("react");

function add (a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    }
    return a+b;
}

function sub(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    }
    return a-b;
}

function mult(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    }
    return a*b;
}

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN

*/

/*
Exercise 3: Rewrite the functions
 from the previous task using an arrow function expression,
  trying to write them in the shortest possible form.
Example of use and expected results
*/

/*
let add = (a,b) => !Number.isInteger(a) || 
! Number.isInteger(b)? NaN : a+b;

let sub = (a,b) => !Number.isInteger(a) ||
! Number.isInteger(b)? NaN : a-b;

let mult = (a,b) => !Number.isInteger(a) || 
! Number.isInteger(b)? NaN : a*b;
*/
/*

Exercise 4: Write an action function that will take the callback 
function as its first argument and the other two arguments as numbers. 
As a callback function,
 you will be able to pass one of the three functions from the previous task. T
 he action function will call the callback function passed to it and will return the obtained result.
  The callback function will accept the second and third arguments from the action call.
Example of use and expected results:
*/

let action = function(callback, a,b)
{
    return callback(a,b);
}
/*
Exercise 5: Write a program that will print out (to the console) 
consecutive integers 10 times, in two-second intervals (start with the number 1). 
Use the functions setInterval, clearInterval and setTimeout.
*/

let counter = 1;
let intervalId = setInterval(() => {
    console.log(counter++);
}, 2000);

/*
Exercise 6: Write a function that will calculate the n-th
 element of the Fibonacci sequence. 
This sequence is defined by a formula:
So each element of the sequence (except the first two) is the sum of the previous two. For example: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 and F6 = F5 + F4 = 8. The function should use recursion. In the definition, use a function expression (store an anonymous function in a variable).

Example of use and expected results:
*/

let fibbRec = function(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibbRec(n-1) + fibbRec(n-2);
}

/*
Exercise 7: Rewrite the function from Task 5 using an arrow function expression,
 but try to shorten its code as much as possible (use conditional operators, and try not to use additional
variables other than the parameter n).
*/

let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));
//ternario
/*
Write an iterative version of the function from Exercise 5 (use the for loop). Declare the function using a function statement.
*/

function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}