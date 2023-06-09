//We can store Numbers in two types in javascript:
//      1.double precision floating point numbers.(64bit)
//      2.Bigint

//We can store numbers with arbitrary length using "e".
let oneBillion = 1000000000;
console.log(oneBillion);
//We can also use underscore to display numbers clearly, the js-engine just ignores the underscores.
let twoBillion = 2_000_000_000;
console.log(twoBillion);
//We can also use e format to score 0's followed by number.
let threeBillion = 3e9;
console.log(threeBillion);
//We can also add 0's before the numbers.
let floatNumber = 0.000002;
console.log(floatNumber);
floatNumber = 2e-6;
console.log(floatNumber);

//================================================================================================
//Numerical System
//    1.base = 16, user for hex colors, character encoding 0 to 9, A to F.
//    2.base = 2, bitwise operations 0 and 1.
//      3.base = 36 method.
//toString() method.

let numOne = 1000;
console.log(numOne.toString(15));

//Rounding
//math.floor
let decNumOne = 3.4;
console.log(Math.floor(decNumOne)); //rounds down to 3.

console.log(Math.ceil(decNumOne)); //rounds up to 4.

console.log(Math.round(decNumOne)); // rounds to the nearest value.

console.log(Math.trunc(decNumOne)); //it removes the decimal point without rounding up.

console.log(decNumOne.toFixed(3)); //rounds to the given n length. it acts like Math.round()
//-------------------------------------------------------------------------------------------------
//isNaN() and isFinite()
//    1. isNaN converts the value to NUmber and  checks whether the value is NaN(other than number), if the value is NaN it returns true, otherwise false.
let a = 23535;
console.log(isNaN(a)); // false => because a is number.
a = "23535";
console.log(isNaN(a)); // false => here the value converts to Numbers, the result is number.
a = "hai";
console.log(isNaN(a)); // true => because a is string. it is a NaN.
console.log(isNaN(true)); //false => even though the value is boolean true, but when it converts into Numbers  the value become Number 1. so it is number.
console.log(isNaN(NaN)); //true => not a number.
console.log(isNaN(undefined)); //true => not a number.
console.log(isNaN(Infinity)); // false => infinity also a number.

console.log(
  "============================================================================="
);

//    2. isFinite converts the value to number, and checks whether the value is finite (other than NaN, infinity and -infinity.)
let b = 456466;
console.log(isFinite(b)); //true => it is a finite value.
b = "235353";
console.log(isFinite(b)); //true => numerical strings, when it converts to Numbers it is a finite vale.
b = "hello";
console.log(isFinite(b)); //false => it is string.
b = false;
console.log(isFinite(b)); //true => boolean , when it converts to Numbers it is Number 0. so true.
b = NaN;
console.log(isFinite(b)); //false => it is a NaN.
b = undefined;
console.log(isFinite(b)); //false.
b = Infinity;
console.log(isFinite(b)); //false => infinity is not a finite value.
console.log(
  "=========================================================================="
);

//-------------------------------------------------------------------------------------------------
//Number.isNan() and Number.isFinite()
//    1.Number.isNaN (), it is more strict versions of isNan(). it does not auto converts to Number, just check whether the value is number or not.

let c = 12442;
console.log(Number.isNaN(c)); //false => is is a number.
c = "353453";
console.log(Number.isNaN(c)); //false => because it is string type.

let d = 3453;
console.log(Number.isFinite(d)); //it is finite value.
d = "hai";
console.log(Number.isFinite(d)); //false => it is string, not a finite vale.

console.log(
  "============================================================================="
);

//------------------------------------------------------------------------------------------------
//parseInt and parseFloat
//    1. parseInt reads the numbers until it reaches an error, returns the gathered number.
let e = "100px";
console.log(parseInt(e)); //it returns only the integer 100, not a string px.
console.log(typeof parseInt(e)); //when we use parseInt it returns the value in Number Data type.
e = "welcome.";
console.log(parseInt(e)); // when we type other than number it returns NaN.
e = true;
console.log(parseInt(e)); //here booleans also a NaN.

//    2.parseFloat reads the number until first floating point, returns with the first floating point value.
let f = 23453.898;
console.log(parseFloat(f)); //returns the whole value.
f = "34534.8987px";
console.log(parseFloat(f)); //it returns upto the floating point numbers.
f = "78768.989.1234";
console.log(parseFloat(f)); //it returns upto the first floating points.
console.log(
  "==============================================================================="
);

//================================================================================================
//Inbuilt Math function
//Math.random() outputs a random number from 0 to 1 (not including 1).
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//Math.max(), gives the maximum number from the list of given numbers.
console.log(Math.max(12, 76, -98, 12, 9, 354, 77)); //354 is the maximum number.

//Math.min(), gives the minimum number from the list of given numbers
console.log(Math.min(12, 76, -98, 12, 9, 354, 77)); //-98 is the small number.

//Math.pow(a, b), it gives the b to the power of a.
console.log(Math.pow(10, 3));
console.log(Math.pow(5, 3));
console.log(Math.pow(16, 4));
