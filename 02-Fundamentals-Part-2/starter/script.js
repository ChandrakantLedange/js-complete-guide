// "use strict";

let hasDrivingLicense = false;
const passTest = true;
if (passTest) hasDrivingLiense = true; //ReferenceError: hasDrivingLiense is not defined if use strict is ON
//If not it won't give error
if (hasDrivingLicense) console.log("I can Drive");

//======= functions =========
function logger() {
  console.log("hello function");
}

logger();

//======== function with parameter ===========
function fruitJuice(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples adn ${oranges} oranges`;
  return juice;
}

fruitJuice(5, 0); //5 0
console.log(fruitJuice(4, 2)); //juice with 4 apples adn 2 oranges

const freshJuice = fruitJuice(3, 1);
console.log(freshJuice); //juice with 3 apples adn 1 oranges

// =========== function declaration VS function expression ========
//====== Function Declaration ======
// const age = calAge(1994);//46
function calAge(birthYear) {
  return 2040 - birthYear;
}
const age = calAge(1994);
console.log("age:", age); //46

// Note: function declaration can call before function declare/defined.

//======== function Expression ============
// console.log(currAge(1994)); //will get error

const currAge = function (birthYear) {
  return 2040 - birthYear;
};

console.log(currAge(1994)); //46

//Note : function expression can not call before declare or defined
//will get error

//========== Arrow function ==========
const myAge = (calAge = (birthYear) => {
  return 2037 - birthYear;
});

console.log(myAge(1992)); //45

//======== Function calling another function ===========

const cutPieces = (fruit) => {
  return fruit * 4;
};

const prepareJuice = (apples, oranges) => {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `juice with ${applePieces} of apple and ${orangePieces} of orange`;
  return juice;
};

console.log(prepareJuice(2, 4));
//juice with 8 of apple and 16 of orange

//====  Challenge #1 ====
const calcAverage = (firstScore, secScore, thirdScore) => {
  return (firstScore + secScore + thirdScore) / 3;
};

// const scoreDolphins = calcAverage(44, 23, 71);
const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(65, 54, 49);
const scoreKoalas = calcAverage(23, 34, 27);
console.log("averages:82", scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  console.log("first if", avgDolphins, 2 * avgKoalas);
  console.log("else if", avgKoalas, 2 * avgDolphins);
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No team wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);
//Dolphins win 60 vs 28

//Array exercise
let tip;
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    tip = (bill * 15) / 100;
  } else {
    tip = (bill * 20) / 100;
  }
  return tip;
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills.length - 1)];

console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

//Object
// store data in key and value format and it is also known as unstructure data

const person = {
  firstName: "Jonas",
  lastName: "Newton",
  age: 2037 - 1991,
  job: "Developer",
  friends: ["jeena", "Bob", "steven"],
};

//To access values
//Dot notation  .
//Bracket notation []
console.log(person.firstName); // jonas
console.log(person["firstName"]); //jonas

//use bracket whenever want to put expression
const nameKey = "Name";
console.log(person["first" + nameKey]); //jonas
// console.log(person."first" + nameKey);//error //unexpected string

// const intrestedIn = prompt(
//   "what do you want to know about person? choose firstName, lastName,age, job and friends"
// );

// console.log(person.intrestedIn); //undefined
// console.log(person[intrestedIn]); //job - developer

// if (person[intrestedIn]) {
//   console.log(person[intrestedIn]);
// } else {
//   console.log(
//     "you entered wrong key.. choose firstName, lastName,age, job and friends"
//   );
// }

//challenge
//from above person object a firstName has 3 friends and jeena is his best friend.
// above should be dynamic
console.log(
  `${person.firstName} has ${person.friends.length} friends and his best friend is ${person.friends[0]}`
);
