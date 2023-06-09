//Static methods in Promise
//1. Promise.all
//  Promise.all()
//receives array of promises. if all are resolved, promise.all resolved and output value.
//If one of the promise rejected or error, the whole promise is rejected.

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(alert); // Error: Whoops!        Here the whole promise.all is rejected and throws an error.

//2. Promise.allSettled
//Promise.allSettled()
//receives array of promises. here it wait to settle all, whether it resolved or rejected.
//It outputs the value of resolved,and gives error's of which are rejected, based on given logic.

//3. Promise.race()
//here it waits only for the first promise to settle. then outputs results, whether resolved or rejected.

//4. Promise.any()
//here it waits for the the first fulfilled promise and gives it's output.
