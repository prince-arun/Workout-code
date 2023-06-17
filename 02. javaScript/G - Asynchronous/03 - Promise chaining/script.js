//Promise chaining
//Using promise chaining we can set multiple functions that settle one after another.
//Examples:
new Promise((resolve, reject) => {
  resolve(1);
}) //Here the promise is resolved, value is 1 passed to next then.
  .then((result) => {
    return result * 2;
  }) //Here the result is processed and the value is passed to next.
  .then((result) => {
    return result * 3;
  }) //Here the result is processed and the value is passed to next.
  .then((result) => {
    return result * 4;
  }) //Here the result is processed and the value is passed to next.
  .then((result) => {
    console.log(result);
  }); //Here we outputs the final value.
