console.log("Hello, World");

// Different types of data types
// String -- Alphabets within quatation marks
// INT - integers (whole numbers both positive and negative ) without quation marks
// Float - decimal numbers
// Boolean - true or false (case sensitive - only small letters)

// Example: String
console.log("This is a string");
// Example: integers
console.log(456);
// Example: Float
console.log(34.789);
// Example: Boolean
console.log(true);

// variable

console.log("prince is a good man");
console.log("he is 24 years old");

var nam = "prince";
var age = 24;

console.log(nam + " is a good man");
console.log("he is " + age + " years old");

var nam = "arun";
var age = 22;

console.log(nam + " is a good man");
console.log("he is " + age + " years old");

// Different types of storage units
// var = assignes value can be changed in a new line aka can be re-declared.
// let = assigned value cannot be changed in a new line 'aka' cannot be re-declared.
// const = constants. value assigning and declaration must to done altogether. cannot be changed or re-declared.

// var - example
var a = 44;
console.log(a);

var a = 55;
console.log(a);

// let - example
let A = "string";
console.log(A);

// let A = "not a string";
// console.log(A);   cannot re assign value in a new line.

// const - example

var b; //variable declared in a line.
b = 56; //value assigned in a new line.
console.log(b);

let c; //variable declared in a line.
c = "words"; //value assigned in new line.
console.log(c);

// const d;      This leads an error
// d = 22;
// console.log(d)

const d = 22; //variable declaration and value assigned must be done at altogether.
console.log(d);

// Assignments

// Area of circle . E = PI*(r**2)
let E;
let PI = 3.14;
var r;
r = 230;
E = PI * r ** 2;
console.log(E);

//Circumference of a circle. C = 2PI*r
let C;
var r = 140;
C = 2 * PI * r; //PI value is already declared in above.
console.log(C);

//Radius of a circle. R = cf / 2PI
let R;
var cf = 67;
R = cf / (2 * PI);
console.log(R);
