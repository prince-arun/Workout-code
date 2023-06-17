//Async, await
//example:
async function add(num1, num2) {
  let result = await (num1 + num2); //here await pauses the add() function to resolve result function , once it's resolved it's value is passed into add function.
  console.log(result);
}
add(1, 2);
