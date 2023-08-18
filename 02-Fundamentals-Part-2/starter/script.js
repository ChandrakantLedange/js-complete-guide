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
// let tip;
// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     tip = (bill * 15) / 100;
//   } else {
//     tip = (bill * 20) / 100;
//   }
//   return tip;
// };

// console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills.length - 1)];

// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

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

//Object methods
const personData = {
  firstName: "Ganesh",
  lastName: "Ledange",
  birthYear: 1991,
  job: "Accountant",
  friends: ["vishnu", "Govind", "Sai"],
  hasDriversLicense: true,

  // plain method with parameter
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  //using this keyword
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  //add new keyword using method
  calcAge: function () {
    this.age = 2035 - this.birthYear;
    console.log(this);
    return this.age;
  },

  //method to getSummary
  getSummary: function () {
    return `${this.firstName} is ${this.age} yers old ${this.job} and he has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license`;
  },
};

// console.log(personData.calcAge(1991));//46

// console.log(personData.calcAge()); //46

console.log(personData.calcAge()); //44
console.log(personData.age); //44

//Challenge
//Ganesh is 44 years old and has a/no drivers license
console.log(
  `${personData.firstName} is ${personData.age} yers old and he has ${personData.hasDriversLicense} drivers license`
); //Ganesh is 44 yers old and he has true drivers license

console.log(personData.getSummary());
//Ganesh is 44 yers old Accountant and he has a driver's license

//challenge 3

/* Write your code below. Good luck! 🙂 */

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};
const johnBMI = john.calcBMI();
const markBMI = mark.calcBMI();

if (johnBMI > markBMI) {
  console.log(
    `${john.fullName}'s BMI ${johnBMI} is higher than ${mark.fullName}'s ${markBMI}`
  );
} else {
  console.log(
    `${john.fullName}'s BMI ${johnBMI} is less than ${mark.fullName}'s ${markBMI}`
  );
} //John Smith's BMI 24.194608809993426 is less than Mark Miller's 27.309968138370508

//for loop
//for loop keeps running while condition is true
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//loop on array

const personArray = [
  "Jonas",
  "Newton",
  2037 - 1991,
  "Developer",
  ["jeena", "Bob", "steven"],
];

for (let i = 0; i < personArray.length; i++) {
  console.log(personArray[i]);
}

//typof
for (let i = 0; i < personArray.length; i++) {
  console.log(typeof personArray[i]);
}
let types = [];
for (let i = 0; i < personArray.length; i++) {
  // types[i] = typeof personArray[i];
  types.push(typeof personArray[i]); //(5) ['string', 'string', 'number', 'string', 'object']
}
console.log(types);

//calculate the ages from array
const years = [1991, 2000, 2001, 1994];
const ages = [];

for (let i = 0; i < years.length; i++) {
  // ages[i] = 2023 - years[i];
  ages.push(2023 - years[i]);
}

console.log(ages); //(4) [32, 23, 22, 29]

//continue and break
// ONLY STRINGS
for (let i = 0; i < personArray.length; i++) {
  if (typeof personArray[i] !== "string") {
    continue;
  }
  console.log(typeof personArray[i], personArray[i]);
}

// break with number
for (let i = 0; i < personArray.length; i++) {
  if (typeof personArray[i] === "number") {
    break;
  }
  console.log(typeof personArray[i], personArray[i]);
}

//Challenge

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calculateAverage([2, 3, 7])); //4
console.log(calculateAverage(totals)); //275.19
console.log(calculateAverage(tips)); //42.89
