document.write("Map and Set");
//Map is collection of keyed items, same as like 'objects' but here it can store any data type as a key.(usually in objects, the key is converted to string. in objects all key's are string.)
//syntax
//    new Map()   => creates a map
//    map.set(key, value)     => sets key value pair
//    map.get(key)    => gets the value of a key, undefined if the key doesn't exists
//    map.has(key)    => returns true, if the key exists, otherwise false
//    map.delete(key) => removes the key/value pair based on key
//    map.clear()     => removes everything from the map
//    map.size        => returns the current element count

//Examples:
let mapOne = new Map();
console.log(typeof mapOne);
mapOne.set("firstName", "Arun");
mapOne.set("lastName", "prince");
mapOne.set("age", 24);
mapOne.set(1, "string");
mapOne.set(2, true);
console.log(mapOne);

//map.get(key) method
console.log(mapOne.get(1)); //returns value "string" for key 1.
console.log(mapOne.get(23)); //returns undefined, map doesn't have key 23.

//map.has(key) method
console.log(mapOne.has("age")); //true, mapOne has age key.
console.log(mapOne.has("city")); //false, mapOne doesn't has city key.

//map.delete(key) method
mapOne.delete("lastName"); //it removes the key/value pair based on key.
console.log(mapOne);

//map.size
console.log(mapOne.size); //current mapOne size is 4.

//map.clear() method
mapOne.clear(); //removes everything from map object.
console.log(mapOne); //returns an empty map. size 0.

//-------------------------------------------------------------------------------------------

//iteration over Maps
// map.keys()   => iterate over keys in map
// map.values() => iterate over values in map
// map.entries()    => iterate over key,value pairs in map.

let mapTwo = new Map([
  ["userName", "elon"],
  ["userLogin", "musk_reeve"],
  ["age", 45],
]);

//Iterate over keys.
for (let userDetails of mapTwo.keys()) {
  console.log(userDetails); //returns userName, userLogin, age.
}
console.log("-----------------------------------------------");

//Iterate over values.
for (let userValues of mapTwo.values()) {
  console.log(userValues); //returns elon, musk_reeve, 45.
}
console.log("-----------------------------------------------");

//Iterate over key,value entries
for (let wholeMap of mapTwo.entries()) {
  console.log(wholeMap); //returns whole key value pairs
}

for (let wholeMap2 of mapTwo) {
  console.log(wholeMap2); //we can also iterate whole map without using map.entries() method.
}
console.log(
  "----------------------------------------------------------------------------------------"
);

//------------------------------------------------------------------------------------
//converts objects to map and map from objects
//Object.entries(objectName)
let objOne = {
  firstName: "arun",
  lastName: "prince",
  myAge: 34,
};
console.log(objOne); //Here we created a object with three properties.

//to convert object into map
let mapThree = new Map(Object.entries(objOne));
console.log(mapThree); //Here we converted into map. it returns arrays of key,value pairs.
console.log(
  "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||"
);

//Object.fromEntries(mapName)
let mapFour = new Map([
  ["secondname", "richard"],
  ["secondLastName", "feyman"],
  ["myAge", 24],
]);
console.log(mapFour); //Here we created a map with three entries.

//to convert map into object
let objTwo = Object.fromEntries(mapFour);
console.log(objTwo);

console.log(
  "=/=/=/=/==/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=//=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/"
);

//-----------------------------------------------------------------------------------------------
//set() and set() methods
//set() creates a unique values, which cannot be duplicated.
//syntax
// new Set() => to create a set()
// set.add(value) => to add value
// set.has(value) => to check whether the value is exist or not. if exist, its true, or false.
// set.delete(value) => delete values
// set.clear() => clear all the values from set
// set.size => outputs the size of set

let set1 = new Set();
set1.add("apple");
set1.add("orange");
set1.add("mango");
set1.add("apple");
console.log(set1); // => apple, orange , mango (does not takes duplicate values.)

//set.has(value)
console.log(set1.has("apple")); // => true.
console.log(set1.has("banana")); // => false

//set.size()
console.log(set1.size); // => size 3.

//set.delete(value)
console.log(set1.delete("mango")); // => does not outputs the deleted values.
console.log(set1); // => mango is deleted.

//set.clear()
set1.clear();
console.log(set1); // => size 0.

//declaring set via multi dimensional array.
let set2 = new Set([["one"], ["two"], ["three"], ["four"], ["five"]]);
console.log(set2);

let set3 = new Set([
  { firstName: "elon" },
  { secondName: "musk" },
  { middleName: "reeve" },
]);
console.log(set3);

// let set4 = new Set({
//   firstName: "arun",
//   secondName: "prince",
//   middleName: "nothing",
// });
// console.log(set4); // cannot be displayed, object is not iterable like arrays.

// iterables.
for (let set21 of set2) {
  console.log(set21); //outputs the each arrays
}

for (let set22 of set2) {
  console.log({ set22 }); // outputs arrays inside an object.
}

for (let set31 of set3) {
  console.log(set31); // outputs as three objects.
}

console.log("-----------------------------");

set3.forEach(([set32]) => {
  for (let set321 in set32) {
    console.log(set321);
  }
}); // outputs the type error.
