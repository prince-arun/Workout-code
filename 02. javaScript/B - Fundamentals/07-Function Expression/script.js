document.write("Function Expression");

//Function Exprssion
//1) Basics function

function sum() {
  let numOne = 4;
  let numTwo = 5;
  sum = numOne + numTwo;
  return sum;
}
console.log(sum());

//2) Function Expression
//syntax
/*
  let variableName = function(){
      //block code

  };      //here semiColan is important, because usual declaration variables has it, so this time also.
*/

let calc = function () {
  let numOne = +prompt("Enter the first number", 50);
  let numTwo = +prompt("Enter the second Number", 45);
  let operation = prompt("Enter the operation here, ", "+");
  let result;
  switch (operation) {
    case "+":
      result = numOne + numTwo;
      break;
    case "-":
      result = numTwo - numOne;
      break;
    default:
      console.lo("ENter a valid function");
  }
  console.log(`${numOne} ${operation} ${numTwo} = ${result}`);
};
let calculator = calc;
calculator();
