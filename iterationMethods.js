/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const numbers = [10, 13, 20, 25, 38, 35, 40];

function filterNumbers(value) {
  return value >= 25;
}
const newArray = numbers.filter(filterNumbers);
console.log(newArray);

function divisibleByFive(num) {
  return num % 5 === 0;
}
const newNum = numbers.filter(divisibleByFive);
console.log(newNum);

// const divisibleByFive = numbers.filter(function (num) {
//   return num % 5 === 0;
// });
// console.log(divisibleByFive);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const squared = numbers.map(function (squares) {
  return squares ** 2;
});

console.log(squared);

const multiplied = numbers.map(function (sum) {
  return sum * 2;
});

console.log(multiplied);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

function filterNumbers2(value2) {
  return value2 >= 20;
}

function squareNumbers(value2) {
  return value2 ** 2;
}
const sum1 = numbers.filter(filterNumbers2).map(squareNumbers);

console.log(sum1);

function filterNumbers3(value3) {
  return value3 % 5 === 0;
}

function multipliedNumbers(value3) {
  return value3 * 3;
}
const sum2 = numbers.filter(filterNumbers3).map(multipliedNumbers);

console.log(sum2);
