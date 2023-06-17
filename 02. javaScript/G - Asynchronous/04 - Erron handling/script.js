//Error handling in Promise
//always put a catch at the end of the promise chaining to catch an unprecedented error.
//if the error happens, the the error throws to nearest error handler(catch).
//if the error isn't resolved, then it proceeds to next error handler.

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
  }) //Here we outputs the final value.
  .catch((error) => {
    console.log("new error occurred"); //by adding new catch handler, we can avoid unexpected errors.
  });
