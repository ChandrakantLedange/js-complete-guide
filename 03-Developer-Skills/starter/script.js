// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//Example you have a task

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (tempArr) {
  let max = tempArr[0];
  let min = tempArr[0];
  for (let i = 0; i < tempArr.length; i++) {
    const curTemp = tempArr[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 2, 7, 30]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// find missing element from an array

const usingIncludes = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return arr1[i];
    }
  }
};

const wortTimeComp = (arr1, arr2) => {
  const sortedArr1 = arr1.sort((a, b) => {
    return a - b;
  });
  console.log(sortedArr1);
  const sortedArr2 = arr2.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return sortedArr1[i];
    }
  }
};
const bestCase = (arr1, arr2) => {
  let rem1 = 0;
  let rem2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    rem1 += arr1[i];
    rem2 += arr2[i] ? arr2[i] : 0;
  }
  return rem1 - rem2;
};

const findMissing = () => {
  const arr1 = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];
  const arr2 = [3, -2, -6, 9, -1, 13, 17, 14, 9, 5];
  //   console.log(usingIncludes(arr1, arr2));
  //   console.log(wortTimeComp(arr1, arr2));
  console.log(bestCase(arr1, arr2));
};
findMissing();

// Print "... 17 c  in 1 days ... 21 c in 2 days ...23 c in 3 days"
const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}c in ${i + 1}days ...`;
  }
  console.log("..." + str);
};
printForecast([17, 21, 23]);
