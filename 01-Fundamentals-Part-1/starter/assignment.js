//variable and values
let country = "India";
let continent = "Asia";
let population = `130 cr`;

console.log("assignment", country, continent, population, typeof population);
//India , Asia , 130 cr , string

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
const birthYear = 1994;
console.log(birthYear);
// birthYear = 1995;//ERROR: assignment.js:35 Uncaught TypeError: Assignment to constant variable
