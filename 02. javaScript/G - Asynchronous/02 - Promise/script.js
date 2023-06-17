//Promise
//syntax
/*  let variableName = new Promise(function(resolve, reject))
    1) the function inside Promise is called executer.
    2) the executer has two callback function. resolve and reject
    3) Promise has two properties
        i) state => pending => if resolve called 'fulfilled' => if reject called "rejected"
        ii)result => undefined => if resolve called 'value' => if reject called 'error'
*/

//basic promise function.
let promiseOne = new Promise((resolve, reject) => {
  let a = 10;
  let b = 10;
  if (a + b === 20) {
    resolve(console.log("The answer is 20"));
  } else {
    reject(console.log("There is an error"));
  }
});

//then and catch
promiseOne
  .then((result) => {
    console.log("the answer is 20");
  })
  .catch((error) => {
    console.log("it's an error");
  });
