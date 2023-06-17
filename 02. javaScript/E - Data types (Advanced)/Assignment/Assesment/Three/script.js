// 1. Define a function ‘hello’ that returns 'Hello “YOUR NAME”!'.
let hello = (yourName) => console.log(`Hello "${yourName}"!`);
hello("Arun Prince");

// 2. Define two functions. The first function ‘a’ should return 'Hello a!' and the second function ‘b’ should return 'Hello b!'.
let a = () => console.log(`Hello a!`);
let b = () => console.log(`Hello b!`);
a();
b();

// 3. 1. Define a function ‘greet’ returning the value 'YOUR NAME!'. 2. Declare a variable ‘salutation’. Call the function ‘greet’ and assign the result of the call to the variable ‘salutation’.
let greet = (yourName) => `${yourName}!`;
let salutation = greet("prince");
console.log(salutation);

// 4. Write a function ‘echo’ that also returns the passed parameter. echo('SkillSafari') should return 'SkillSafari' and echo('EduKeys') should return 'EduKeys'
let echo = (parameter) => console.log(parameter);
echo("SkillSafari");
echo("EduKeys");

// 5. Write a function ‘greet’ having one parameter and returning 'Hello <parameter>!'. Example: greet('SkillSafari') should return 'SkillSafari!'
let greeting = (parameter) => console.log(`Hello ${parameter}!`);
greeting("SkillSafari");

// 6. Write a function log, that takes a parameter and logs this parameter in console. Example: log('Hello SkillSafari') should log 'Hello SkillSafari''.
let log = (parameter) => console.log(`Hello ${parameter}!`);
log("SkillSafari");

// 7. Write a function ‘shout’ that takes a string and returns this string duplicated. In addition, the return should be logged in console Example: shout('Hello') should return 'HelloHello' and should log 'HelloHello'.
let shout = (str) => console.log(`${str + str}`);
shout("Hello");

// 8. Write a function ‘length’ that takes a string and returns the number of characters of the string.Example: length('Hello') should return 5.
let length = (str) => console.log(str.length);
length("Hello");

// 9. Write a function ‘toCase’ that takes a string and returns that string in lowercase and uppercase with - as delimiter. Example: toCase('hello') should return 'hello-HELLO'.
let toCase = (str) => console.log(`${str.toLowerCase()}-${str.toUpperCase()}`);
toCase("Welcome");

// 10.Write a function ‘shortcut’ that takes two strings and returns the initial letters of theses strings.Example: shortcut('Java', 'Script') should return 'JS'.
let shortcut = (strOne, strTwo) => {
  let initialOne = strOne.slice(0, 1);
  let initialTwo = strTwo.slice(0, 1);
  let result = initialOne + initialTwo;
  console.log(result);
};
shortcut("Java", "Script");

// 11.Write a function ‘firstChar’, which returns the first character that is not a space when a string is passed. Example: firstChar(' YOUR NAME ') should return 'YOUR NAME’s first Character'.
let firstChar = (str) => console.log(str.trim().slice(0, 1));
firstChar("       skill safari    ");

// 12.Write a function ‘indexOfIgnoreCase’ taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive. Example: indexOfIgnoreCase('skill','kill') and indexOfIgnoreCase('skill','KILL') should return 1.
let indexOfIgnoreCase = (strOne, strTwo) =>
  console.log(strOne.toLowerCase().indexOf(strTwo.toLowerCase()));
indexOfIgnoreCase("skill", "KILL");

// 13.Write a function ‘secondIndexOf’, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned. Example: secondIndexOf('White Rabbit', 'it') should return 10.
let secondIndexOf = (strOne, strTwo) => {
  let startIndex = strOne.indexOf(strTwo);
  let secondOccurrence = strOne.indexOf(strTwo, startIndex + 1);
  console.log(secondOccurrence);
};
secondIndexOf("White Rabbit", "it");

// 14.Write a function ‘firstWord’, taking a string and returning the first word in that string. The first word are all characters up to the first space. Example: firstWord('skill and safari') should return 'skill'.

let firstWord = (str) => {
  let pos = str.indexOf(" ");
  let result = str.slice(0, pos);
  console.log(result);
};
firstWord("skill and safari");

// 15.Write a function ‘normalize’, that replaces '-' with '/' in a date string. Example: normalize('15-07-2021') should return '15/07/2021'.
//Method 1 :
let normalize = (date) => {
  let replaceFirst = date.replace("-", "/");
  let replaceSecond = replaceFirst.replace("-", "/");
  console.log(replaceSecond);
};
normalize("09-04-1999");

//Method 2 : Using regular expression
let normalized = (date) => console.log(date.replace(/-/g, "/"));
normalized("29-01-2000");

// 16.Write a function ‘add’ that takes two numbers and returns their sum. Example: add(1, 2) should return 3.
let add = (numOne, numTwo) => console.log(numOne + numTwo);
add(-34, 34);

// 17.Write a function ‘toFahrenheit’ that converts a temperature from Celsius to Fahrenheit. Example: toFahrenheit(0) should return 32.
//Method 1:
let toFahrenheit = (celsius) => {
  let fahrenheit = celsius + 32;
  console.log(fahrenheit);
};
toFahrenheit(1);

//Method 2:
let toFahrenHeit = (celsius) => {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(fahrenheit);
};
toFahrenHeit(1);

// 18.Write a function ‘mean’ that takes 2 numbers and returns their mean value. Example: mean(1, 2) should return 1.5.
let mean = (numOne, numTwo) => {
  let mean = (numOne + numTwo) / 2;
  console.log(mean);
};
mean(1, 2);

// 19.Write a function ‘hypotenuse’ that calculates the length of the hypotenuse of a right triangle. The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. If a and b are the lengths of the two legs and c is the length of the hypotenuse, the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.
let hypotenuse = (numOne, numTwo) => {
  let thirdLenLength = Math.sqrt(Math.pow(numOne, 2) + Math.pow(numTwo, 2));
  console.log(thirdLenLength);
};
hypotenuse(3, 4);

// 20.Write a function ‘midrange’, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.Example: midrange(3, 9, 1) should return (9+1)/2 = 5.
let midrange = (numOne, numTwo, numThree) => {
  let smallNumber = Math.min(numOne, numTwo, numThree);
  let largeNumber = Math.max(numOne, numTwo, numThree);
  let midRange = (smallNumber + largeNumber) / 2;
  console.log(midRange);
};
midrange(3, 9, 1);
