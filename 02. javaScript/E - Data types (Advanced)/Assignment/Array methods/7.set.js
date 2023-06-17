//The output will be in different Set()
let fruits = new Set(["Apple", "Orange", "Mango", "Banana"]);

fruits.forEach((fruit) => {
  console.log(`The fruit of ${fruit} and the letter combination is`);
  console.log(new Set([...fruit][0].slice(0, 1) + [...fruit].slice(-1)));
});

console.log(
  "------------------------------------------------------------------------"
);
//The output will be in the same Set()
console.log("The output will be in the same Set()");
let output = new Set();
for (fruit of fruits) {
  let letterOne = fruit.slice(0, 1);
  let lastLetter = fruit.slice(-1);
  let combinedLetter = letterOne + lastLetter;
  output.add(combinedLetter);
}
console.log(output);

console.log(
  "-------------------------------------------------------------------------"
);
//The output will be in an Array
console.log("The output will be as a Array");
for (let fruit of fruits) {
  console.log([...(fruit.slice(0, 1) + fruit.slice(-1))]);
}
