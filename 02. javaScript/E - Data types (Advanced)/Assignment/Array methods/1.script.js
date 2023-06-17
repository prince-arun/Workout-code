//a function that produce a random number.
//Tha random number should be a whole number.
//The function that accepts two parameters. min and max
//The random number should be in between the min and max parameters.

function randomNumber(minLimit, maxLimit) {
  //If Math.floor() is used the result will include minLimit, but does not include maxLimit.
  //If Math.ceil() is used the result will does not include minLimit, but does include maxLimit.
  //If Math.round() is used the result will include both, either minLimit or MaxLimit.
  let result = Math.random();
  finalResult = Math.ceil(result * (maxLimit - minLimit));
  console.log(finalResult + minLimit);
}
randomNumber(95, 98);
