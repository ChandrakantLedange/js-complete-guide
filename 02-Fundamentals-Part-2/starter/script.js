// "use strict";

let hasDrivingLicense = false;
const passTest = true;
if (passTest) hasDrivingLiense = true; //ReferenceError: hasDrivingLiense is not defined if use strict is ON
//If not it won't give error
if (hasDrivingLicense) console.log("I can Drive");

//functions
function logger() {
  console.log("hello function");
}

logger();

//function with parameter
function fruitJuice(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples adn ${oranges} oranges`;
  return juice;
}

fruitJuice(5, 0); //5 0
console.log(fruitJuice(4, 2)); //juice with 4 apples adn 2 oranges

const freshJuice = fruitJuice(3, 1);
console.log(freshJuice); //juice with 3 apples adn 1 oranges

//function declaration VS function expression
//Function Declaration
// const age = calAge(1994);//46
function calAge(birthYear) {
  return 2040 - birthYear;
}
const age = calAge(1994);
console.log("age:", age); //46

// Note: function declaration can call before function declare/defined.

//function Expression
// console.log(currAge(1994)); //will get error

const currAge = function (birthYear) {
  return 2040 - birthYear;
};

console.log(currAge(1994)); //46

//Note : function expression can not call before declare or defined
//will get error

//Arrow function
const myAge = (calAge = (birthYear) => {
  return 2037 - birthYear;
});

console.log(myAge(1992)); //45
