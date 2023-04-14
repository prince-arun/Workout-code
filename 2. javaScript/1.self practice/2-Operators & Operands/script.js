// Math operation with integers and floats
// Addition or sum  - use ' + ' sign.
// subraction       -use ' - ' sign.
// multiplication   -use ' * ' sign.
//division      -use ' / ' sign.
//remainder     -use ' % ' sign.
//increament    -use ' ++ ' sign.
//decrement     -use ' -- ' sign.
//increment by number      -use ' += ' sign.
//decrement by number      -use ' -= ' sign.

//Addition - example
var a1 = 10;
var a2 = 23;
let A = a1 + a2;
console.log(A);

//subraction - example
var b1 = 55,
  b2 = 98;
let B = b2 - b1;
console.log(B);

//multiplication - example
var c1 = 13,
  c2 = 8.098;
let C = c1 * c2;
console.log(C);

//division - example
var d1 = 12,
  d2 = 234;
let D = d1 * d2;
console.log(D);

//reminder - example
var e1 = 10,
  e2 = 3;
let E = e1 % e2;
console.log(E);

//increment - example
var f = 22;
let F = f + 10;
F++;
console.log(F);

//decrement - example
var g = 14.89;
let G = g + 49;
G--;
console.log(G);

// increment and decrement and multiply and divide by more numbers.

let h1 = 100;
let H = h1 + 20;

H += 50;
console.log(H);

H -= 10;
console.log(H);

H *= 10;
console.log(H);

H /= 10;
console.log(H);

H %= 10;
console.log(H);

//Advance math operations
//rounding the value to whole number
var i = 5.7; //Math.round - round the nearest whole number.
var i = 5.1;
console.log(Math.round(i));

//round UP to the whole number
console.log(Math.ceil(i));

//round DOWN the whole number
console.log(Math.floor(i));

//indexing --String

let j = "a big tree";
console.log(j.length); //defines the length of a string.

console.log('we are just a drifting dust "in the universe"');
console.log('we live in "hell"');

console.log(
  "I am a fornt-end \nMERN develoer.\nI have less than year of experience." // starts in a new line (\n).
);

console.log(j.indexOf("big")); //shows the particular string's place in numbers.
console.log(j[3]); //shows the particular string based on its place.

console.log(j.toUpperCase()); //change the string into upper case letters.
console.log(j.toLowerCase()); //change the string into lower case letters.

//Assignments
//Creating a Body Mass Index calculator:
//BMI = weight / height squered.

let BMI;
var w = 60;
var h8 = 1.82;
let h0 = h8 ** 2;
BMI = w / h0;
console.log(BMI);

w = 100;
h8 = 1.45;
h0 = h8 ** 2;
BMI = w / h0;
console.log(BMI);
