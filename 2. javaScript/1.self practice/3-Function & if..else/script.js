//Conditional statements

var a = true;
if (a) {
  console.log("a is true");
} else {
  console.log("a is false");
}

var b = 3 > 7;
if (b) {
  console.log("three is greater than seven");
} else {
  console.log("three is less than seven");
}

var Name = "prince";
var age = 24;
var work = "full-stack developer";

if (work == "front-end developer") {
  console.log(
    Name +
      " is " +
      age +
      " years old. \nHe joined here as a front-end developer."
  );
} else if (work == "Backend developer") {
  console.log(
    Name + " is" + age + " year old. \nHe joined here as a Backend developer."
  );
} else {
  console.log(
    Name +
      " is " +
      age +
      " years old.\nHe joined here as a full-stack developer."
  );
}

//practice
function calculator(num1, num2, opp) {
  if (opp == "ADD") {
    return num1 + num2;
  } else if (opp == "SUB") {
    return num2 - num1;
  } else if (opp == "MUL") {
    return num1 * num2;
  } else if (opp == "DIV") {
    return num1 / num2;
  } else {
    return "Invalid operation";
  }
}

console.log(calculator(12, 20, "hi"));

//Operators
// === Strick equality operators.

function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return "Both value should be numbers";
  }
}
console.log(add(12, 15)); //Both are numbers.
console.log(add(13, "23")); //Here the second value is a string.

//teranary operator ?

function addition(num1, num2) {
  const sum =
    num1 + num2 > 20
      ? "The sum is greater than 20"
      : "The sum is less than twenty.";
  return sum;
}
console.log(addition(4, 77));

//Assignment seating arrangement
function seatNumber(num1) {
  if (
    num1 === 7 ||
    num1 === 15 ||
    num1 === 23 ||
    num1 === 31 ||
    num1 === 39 ||
    num1 === 47 ||
    num1 === 55 ||
    num1 === 63 ||
    num1 === 71
  ) {
    return "Your seat is: Side Lower Berth.";
  } else if (
    num1 === 8 ||
    num1 === 16 ||
    num1 === 24 ||
    num1 === 32 ||
    num1 === 40 ||
    num1 === 48 ||
    num1 === 56 ||
    num1 === 64 ||
    num1 === 72
  ) {
    return "Your seat is: Side Upper Berth.";
  } else if (
    num1 === 1 ||
    num1 === 4 ||
    num1 === 9 ||
    num1 === 12 ||
    num1 === 17 ||
    num1 === 20 ||
    num1 === 25 ||
    num1 === 33 ||
    num1 === 36 ||
    num1 === 41 ||
    num1 === 44 ||
    num1 === 49 ||
    num1 === 52 ||
    num1 === 57 ||
    num1 === 60 ||
    num1 === 65 ||
    num1 === 68
  ) {
    return "Your seat is: Lower Berth.";
  } else if (
    num1 === 2 ||
    num1 === 5 ||
    num1 === 10 ||
    num1 === 13 ||
    num1 === 18 ||
    num1 === 21 ||
    num1 === 26 ||
    num1 === 29 ||
    num1 === 34 ||
    num1 === 37 ||
    num1 === 42 ||
    num1 === 45 ||
    num1 === 50 ||
    num1 === 61 ||
    num1 === 66 ||
    num1 === 69
  ) {
    return "Your seat is: Middle Berth.";
  } else if (
    num1 === 3 ||
    num1 === 6 ||
    num1 === 11 ||
    num1 === 14 ||
    num1 === 19 ||
    num1 === 22 ||
    num1 === 27 ||
    num1 === 30 ||
    num1 === 35 ||
    num1 === 38 ||
    num1 === 43 ||
    num1 === 46 ||
    num1 === 51 ||
    num1 === 54 ||
    num1 === 59 ||
    num1 === 62 ||
    num1 === 67 ||
    num1 === 70
  ) {
    return "Your seat is: Upper Berth.";
  } else if (num1 > 72) {
    return 'Only "72" Seats are Available.\nPlease Check the "Seat Number" again.';
  }
}

console.log(seatNumber(76));

// Improvised code-----------------------------------
function seatNumber(num1) {
  if (num1 <= 72) {
    if (num1 % 8 === 7) {
      return "Your seat is: Side Lower Berth.";
    } else if (num1 % 8 === 0) {
      ffh;
    } else if (num1 % 4 === 1 || num1 % 4 === 2) {
      return "Your seat is: Middle Berth.";
    } else {
      return "Your seat is: Lower Berth.";
    }
  } else {
    return 'Only "72" Seats are Available.\nPlease Check the "Seat Number" again.';
  }
}

console.log(seatNumber(33));
