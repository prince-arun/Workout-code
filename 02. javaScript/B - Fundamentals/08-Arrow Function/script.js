//Arrow function is a shorter form of function
//syntax
/*
      let functionName = (argument1, argument2, ..... argument N.) => expression
  //the above code can also shown using function expression
      let functionName = function(argument1, argument2,...argumentN){
                      
                      expression
      }
  */
//Example:
let calc = (a, b) => console.log(a + b);
calc(1, 9);

// if it is a empty function without a argument
let userGreet = () => alert("Welcome to Arrow function");
userGreet();

//the above function is suitable for single line expression.
//If we want to use multiline expression we can use curly braces in the arrow function.

let userName = (a, b) => {
  result = a + b;
  return result;
};
console.log(userName(45, 88));

//---------------------------------------------------------
//rewrite this using Arrow function

//   function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function () {
//       alert("You agreed.");
//     },
//     function () {
//       alert("You canceled the execution.");
//     }
//   );
//   ask();

let ask = (question, yes, no) => {
  confirm(question) ? yes : no;

  ask("Do You agree?", () => alert("You agreed.")),
    () => alert("You canceled the execution");
};
ask();
