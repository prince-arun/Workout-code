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
