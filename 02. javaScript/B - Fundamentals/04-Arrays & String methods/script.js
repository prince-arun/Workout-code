//Array

var myArray = ["arun", "prince", "saravanan"];
console.log(myArray);

var myArray1 = [
  ["arun", 24, false],
  ["prince", 24, true],
  ["saravanan", 22, false],
];
console.log(myArray1);
console.log(myArray1[1][0]);

var myArray2 = ["apple", ["mac", "mac pro", [2017, 2020]]];

console.log(myArray2[1][2][0]);
console.log(myArray2.indexOf("mac pro"));
console.log("======================================================");

//We can also add objects and functions to the arrays.
let arrOne = [
  "name",
  { age: 23 },
  function () {
    return console.log("say hai");
  },
];
console.log(arrOne[0]); //accessing array elements using bracket notation.
console.log(arrOne[1].age); //to access a object we use a bracket notation followed by dot notation.
console.log(arrOne[2]()); //we can call the function in the arrays using bracket notation followed by brackets.
arrOne[2]();

console.log("=====================================================");
//------------------------------------------------------------------------------------------------------

//Array-functions
//push    Adds string/int/boo/float at last of the array.
myArray.push("elon");
console.log(myArray);

//pop    Remove string/int/boo/float at last of the array.
myArray.pop("elon");
console.log(myArray);

//unshift   Add string/int/boo/float at first of the array.
myArray.unshift("musk");
console.log(myArray);

//shift     Remove string/int/boo/float at first of the array.
myArray.shift("musk");
console.log(myArray);

//---------------------------------------------------------------------------------------------------
//for...of loop
let arrTwo = ["name", 34, true];
for (let key1 of arrTwo) {
  console.log(key1);
}

//Array length property
let arrThree = [1, 2, 3, 4, 5];
console.log(arrThree.length);

arrThree.length = [3];
console.log(arrThree); //Here we shorten the arrays length by three, so it shows only three elements.

arrThree.length = [5];
console.log(arrThree); //Here also gives only three, because shorteninig the arry is irreversable, we can shorten the length but we cant revive it to ist older form.
