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
