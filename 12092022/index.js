// Variables
// initialization
let age = 25;
const name = "Jose";


age = 26;

// Display functions
console.log(age);
// alert("Hello World!");
// prompt("enter a number:");

// Data Types
const firstName = "John"; //String Data Type, ("", '') String literal
const message = `This
is my
message`; //String, (``) backtick, Template literal
const greeting = `Hello ${ firstName }`; //${ expression }
const favoriteNumber = 7; //Number Data Type
const average = 99.99; //Number Data Type
const isHappy = true; // Boolean Data Type
const isHungry = false; // Boolean Data Type
const value = null; // null
const unDef = undefined; // undefined 

// Operators
// Assignment Operator =
const num1 = 15;
const num2 = 5;

// String + String / Number = String
console.log("Number 1: " + num1);
// \n = new line
console.log("This \n is \n another \n line");

// Math Operators

// console.log("Addition: " + num1 + num2);
console.log(`Addition: ${num1 + num2}`); // Addition Operator +
console.log(`Substraction: ${num1 - num2}`); // Substraction Operator -
console.log(`Multiplication: ${num1 * num2}`); // Multiplication Operator *
console.log(`Division: ${num1 / num2}`); // Division Operator /
console.log(`Modulo: ${num1 % num2}`); // Remainder Operator, Modulo %

let count = 10;
// Increment ++

console.log(count++); //Postfix increment
/* 
count; //call the variable
count += 1; //increment by 1
*/

console.log(++count); //Prefix increment
/* 
count += 1; //increment by 1
count; //call the variable
*/


// Decrement --
console.log(count--); //Postfix decrement
/* 
console.log(count);
count -= 1;
*/
console.log(--count); //Prefix decrement
/* 
count -= 1;
console.log(count);
*/

// More Assignment Operators
let sum = 0;
sum += 9; // Addition assignment +=
//sum = sum + 9;
let diff = 10
diff -=3; //Subtraction assignment -=
// diff = diff - 3;
let product = 1;
product *= 5; // Multiplacation assignment

let qoutient = 24;
qoutient /= 6; //Division assignment

let remainder = 10;
remainder %= 3; //Module assignment

// console.log(sum, diff, product,qoutient,remainder );

// Conditionals / Conditional statements
let number = 20;
let description;
// if statement
if (number >= 20) {
    description = "Number greater than 20";
}
else if (number == 19) {
    description = "Number is 19";
}
else {
    description = "Number less than 20"
}

console.log(description);

// console.log( 10> 20);
// equality
console.log("10" == 10); //true
// Strict equality
console.log("10" === 10); //false

// Truthy and Falsy values
// falsy values evaluate as false
// any non-zero number = truthy value
// zero = falsy value
if (number) {
    console.log(number);
}
const sample = "sample"; //falsy value
// const sample = "sample"; // truthy value
if (sample) {
    console.log(sample);
}

if (null) {
    console.log("null");
}
let example;
if (undefined) {
    console.log("undefined");
}
// Loop
let num = 10;
num = 2;
// while loop
while (num > 0);//condition 
{
    //code block
    console.log(num--);
}
// Do.... while loop
num = 2;
do {
    console.log(num++);
} while (num < 10);

// for loop
// for (initialization; condition; post-loop operation)
// check condition
// if true execute code
// post-loop operation
for (let i = 0; i < 5; i++) {
    
    if (i === 3) {
        console.log("The number 3");
    }   
}


// Prompt user input
const input = prompt ("Enter a number: ");

// const numSample = Number("50");

// console.log(input + 25);

/******************************
 * function
 */

// Function Declaration
function add(num1, num2) {
    console.log(num1);
    return;
    return num1 + num2;
}

// () = invoker
const sum1 = add (10, 5); // 15
console.log(sum1);
// const sum2 = add (50, 99);

// Function Expression 
const subtract = function (num1, num2) {
    return num1 - num2;
}
const diff1 = subtract(80, 50);
console.log(diff1);
const diff2 = subtract;
// console.log(diff2);
// console.log(diff2);

// Arrow Function
// const multiply = (num1, num2) => {
//    // other code here
// return num1 * num2;
// }
const multiply = (num1, num2) => num1 * num2;
const product1 = multiply(5,8);
console.log(product1);

const greetMe = () => alert("Hello Someone!");
greetMe();





