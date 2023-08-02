let js = "amazing";
// if ((js = "amazing")) {
//   alert("javascript is Fun!");
// }
let age = 20;
let name = "Jitendra";
console.log(age, name);

// variable and values
var firstName = "john";
console.log("firstName:", firstName);

var myAge = 22;
console.log("myAge:", myAge);

//DataType
let isIsland = false;
let language;

console.log(typeof country); //string
console.log(typeof continent); //string
console.log(typeof population); //string
console.log(typeof isIsland); //boolean
console.log(typeof language); //undefined

//var, let and const
//var
var month = "january";
console.log(month);
month = "february";
console.log(month);

//let
let day = "sunday";
console.log(day);
day = "monday";
console.log(day);

//const
// const birthYear = 1994;
// console.log(birthYear);
// birthYear = 1995;//ERROR: assignment.js:35 Uncaught TypeError: Assignment to constant variable

//Basic operators
// let jonasAge = 30;
// let jeenaAge = 28;

// averageAge = jonasAge + jeenaAge / 2;
// console.log(averageAge);

//operator precedence
//follow mdn operator precedence for bettern understanding.
//Exercise
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark); //27.309968138370508
console.log(BMIJohn); //24.194608809993426
console.log(BMIMark > BMIJohn); //true

//string and template literals
const jonasName = "Jonas";
const jonasAge = 30;
const jonasJob = "Programmer";

const jonas = "I'm" + " " + " " + jonasName + " a " + jonasAge + "years old";
console.log(jonas);

//template literals
const newJonas = `I'm ${jonasName} and a ${jonasAge} years old`;
console.log(newJonas);

//string with multi line
console.log(
  "string with\n\
 multi\n\
 lines."
);

console.log(`string with
 multi
  line`);

//Taking decision (if/else statements)
