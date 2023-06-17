// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

//         let calculator = {
//   // ... your code ...
//         };

//         calculator.read();
//         alert( calculator.sum() );
//         alert( calculator.mul() );

let calculator = {
  read() {
    let a = +prompt("Enter the first value");
    let b = +prompt("Enter the second value");
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
