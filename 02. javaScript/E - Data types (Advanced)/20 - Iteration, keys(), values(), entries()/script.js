//Iteration
//keys()
//values()
//entries()
//Above are general iteration methods for 1.Map, 2.Set, 3.Objects

//--------------------------------------------------------------------------------------
//Iteration over Maps
let mapOne = new Map();
mapOne.set("name", "prince");
mapOne.set("age", 24);
mapOne.set("city", "cbe");
console.log(mapOne);
//keys()
console.log(mapOne.keys()); // outputs => keys [name, age, city]
for (let itMapOne of mapOne.keys()) {
  console.log(itMapOne); //outputs keys => name, age, city. for..in loop does not work here.
}
//values()
console.log(mapOne.values()); // outputs => values [prince, 24, cbe]
for (let itMapTwo of mapOne.values()) {
  console.log(itMapTwo); //outputs values => prince, 24, cbe
}
//entries()
console.log(mapOne.entries()); //same as mapOne.
for (let [key, value] of mapOne.entries()) {
  console.log(`The key is => ${key} and the value is => ${value}`);
}
console.log(
  "====================================================================="
);

//------------------------------------------------------------------------------------------
//Iteration over Objects
let objOne = {
  name: "elon",
  age: 50,
  city: "newYork",
};
console.log(objOne);
//keys()
// the syntax here is Object.keys(objName) but in map and set it is map.keys().
console.log(Object.keys(objOne)); //outputs => array of [name, age, city]
for (let itObjOne of Object.keys(objOne)) {
  console.log(itObjOne); //outputs => name, age city
}
//values()
console.log(Object.values(objOne)); //outputs => array of [elon, 50, newYork]
for (let itObjTwo of Object.values(objOne)) {
  console.log(itObjTwo); //outputs => elon, 50, newYork
}
//entries()
console.log(Object.entries(objOne)); //outputs => array of [name, elon] [age, 50] [city, newYork]
for (let [key, value] of Object.entries(objOne)) {
  console.log(`key => ${key} : value => ${value}`);
}
console.log("==========================================================");
//---------------------------------------------------------------------------------
//Iteration over Set
//Set has only has value, unlike map and object. so iteration over using keys(), values(), entries() all brings same results.
let setOne = new Set();
setOne.add(["name", "richard"]);
setOne.add(["age", 34]);
setOne.add(["city", "europe"]);
setOne.add(["name", "richard"]);
console.log(setOne);
//keys()
console.log(setOne.keys()); //outputs array of keys
for (let itSetOne of setOne.keys()) {
  console.log(itSetOne);
}
//values()
console.log(setOne.values());
for (let itSetTwo of setOne.values()) {
  console.log(itSetTwo);
}
//entries()
console.log(setOne.entries());
for (let [key, value] of setOne.entries()) {
  console.log(`key => ${key} and value => ${value}`);
}
