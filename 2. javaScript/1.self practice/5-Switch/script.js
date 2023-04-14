//Switch statements works like multiple if statements
//syntax
// switch (argument){
// case value1 :
//      value1 block executed until recent break.
//      break;
// case value2 :
//      value2 block executed until recent break.
//      break;
// default :
//      If non of above code executed, default executed.
//      break;
//}
//Switch statement takes the argument and checks for "strict equality(===)" with value1, it true the block executed. If false it checks with value2, and goes on. If none of that is true, the default blocks executed.

//Example:----------------------------------------------
//checks the calculation
let firstNumber = 10;
switch (firstNumber) {
  case 13:
    console.log("The Answer is thirteen");
    break;
  case 45:
    console.log("The Answer is fourty five");
    break;
  case 10:
    console.log("The Answer is Ten.");
    break;
  default:
    console.log("Not a number");
    break;
}

//Case grouping
//If multiple case has same block, we can group them

let secondNumber = +prompt("enter the number", 20);
switch (secondNumber) {
  case 24:
    console.log("The value is 24");
    break;
  case 34: //here the three case has same set of code, so it grouped without break.
  case 45: //the code executed until the next break which is line number 46.
  case 67:
    console.log("The Value is greater than the answer.");
    break;
  case 20:
    console.log("The answer is correct.");
    break;
  default:
    console.log("Not a number");
}

//---------------------------------------------Task 1------------------------------------------
//rewrite the following code using if else.
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

let browser = prompt("Enter the browser name", "Firefox");

if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("Okey we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

//-------------------------------------Task 2------------------------------------------------
//rewrite the following to switch cases
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2, 3");
    break;
}
