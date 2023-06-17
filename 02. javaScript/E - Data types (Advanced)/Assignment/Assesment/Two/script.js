// 1. Write a function ‘dice’ that returns like a dice a random number between 1 and 6.
let dice = () => {
  let result = Math.round(Math.random() * 6);
  return console.log(result);
};
//dice();

// 2. Write a function ‘add’ that takes a string with a summation task and returns its result as a number Two natural numbers should be added. The summation task is a string of the form '102+17'. Example: add('102+17') should return 119.

let add = (summation) => {
  let splitString = summation.split("+");
  let result = +splitString[0] + +splitString[1];
  console.log(result);
};
//add("102+17");

// 3. Write a function ‘nand’ that takes two Boolean values. If both values are ‘true’, the result should be ‘false’. In the other cases the return should be ‘true’. I.e.: The call nand(true, true) should return ‘false’. The  calls nand(true, false), nand(false, true) and nand(false, false) should return ‘true’.

let nand = (booOne, booTwo) =>
  booOne === true && booTwo === true ? console.log(false) : console.log(true);

//nand(true, false);

// 4. Write a function ‘isEven’ that checks if a passed number is even. If the given number is  even, ‘true’ should be returned, otherwise ‘false’. Example: isEven(2) should return ‘true’ and isEven(3) should return ‘false’.

let isEven = (number) =>
  number % 2 == 0 ? console.log(true) : console.log(false);

//isEven(3);

// 5. Write a function ‘unequal’ that checks 3 values for strict inequality. The function should return ‘true’ if all three parameters are strict unequal. Otherwise ‘false’.Example: unequal(1, 2, 3) should return ‘true’ and unequal(1, 1, 2) should return ‘false’.

let unequal = (numOne, numTwo, numThree) =>
  numOne !== numTwo && numTwo !== numThree && numThree !== numOne
    ? console.log(true)
    : console.log(false);

//unequal(1, 2, 3);

// 6. Write a function ‘isThreeDigit’ that checks if a number is greater than or equal to 100 and  less than 1000. Example: isThreeDigit(500) should return ‘true’ and isThreeDigit(50) should return ‘false’.

let isThreeDigit = (number) =>
  number >= 100 && number < 1000 ? console.log(true) : console.log(false);

//isThreeDigit(277);

// 7. Write a function ‘equals’ that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should  get 'UNEQUAL'. Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.
let equals = (numOne, numTwo) =>
  numOne === numTwo
    ? console.log("Two values are 'EQUAL'")
    : console.log("Two values are 'UNEQUAL'");

//equals(1, 2);

// 8. Write a function ‘repdigit’ that determines whether a two-digit decimal is a ‘repdigit’ or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'. Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.

//Method 1:

let repdigit = (number) =>
  number % 11 === 0 ? console.log("Repdigit!") : console.log("No Repdigit!");
//repdigit(66);

//Method 2: Here we can give input as two digit decimal numbers
let repDigit = (number) => {
  let decimalNumber = Math.round((number % 1) * 100);
  decimalNumber % 11 === 0
    ? console.log("Repdigit !")
    : console.log("No Repdigit !");
};
//repDigit(35.36);

// 9. Write a function ‘addWithSurcharge’ that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2. Example: addWithSurcharge(5, 15) should return 23.

//used resources to complete:
let addWithSurcharge = (amountOne, amountTwo) => {
  let chargeOne = amountOne <= 10 ? 1 : 2;
  let chargeTwo = amountTwo <= 10 ? 1 : 2;
  let price = chargeOne + chargeTwo + amountOne + amountTwo;
  console.log(price);
};
addWithSurcharge(5, 15);

// 10.Write a function ‘sumMultiples’ taking a natural number n and returning the sum of all multiples of 3 and of 5 that are truly less than n. Example: All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. Their sum is 78. sumMultiples(20) should return 78.
let sumMultiples = (num) => {
  let array = [];
  for (let i = 1; i < num; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) continue;
    array.push(i);
  }
  let calc = array.reduce((acc, item) => {
    return acc + item;
  }, 0);
  console.log(calc);
};
sumMultiples(20);
