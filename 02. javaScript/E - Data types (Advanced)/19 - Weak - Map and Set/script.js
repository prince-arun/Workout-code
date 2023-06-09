let prince = { name: "prince" };
let firstName = [prince];
console.log(firstName); //output the array , which contains the object.
prince = null; //Here the object which refer the prince set to null. so that object don't exist anymoe.
console.log(firstName); //but here it outputs the object, even though it doesn't exist, because changing the object doesn't affect the array reference here.
console.log(prince); //here outputs null, because that object is no more.
console.log(firstName.name); //here outputs =>undefined. because the object is no longer available.

//-----------------------------------------------------------------------------------------------
// Above example works same for arrays, object, map and set.
let fruits = { name: "apple", color: "green" };
let mapOne = new Map();
mapOne.set(fruits, true);
console.log(mapOne); //Here the fruits has two reference, one is fruits variable and another one is mapOne variable.

fruits = null;
console.log(fruits); // Here outputs => null, because the object no longer exist.
console.log(mapOne); //Here outputs => object with two properties.

//so as long as any of the reference point has been present the object is not deleted from memory.

//==============================================================================================

// WeakMap();
// The major difference between map and weakmap is the key's must be objects in weakmap.
// syntax
// new WeakMap()
// Methods
// weakmap.set(ke, value),    weakmap.get(key),     weakmap.has(key),     weakmap.delete(key)

let weakMap = new WeakMap();
//weakMap.set("name", "prince");
console.log(weakMap); //outputs the type error, only object can be used as
weakMap.set({ age: 23 }, "myAge");
console.log(weakMap); //outputs => key - {age: 23}, value - "myAge",

//----------------------------------------------------------------------------------------------
//The key difference is when the reference to the object is deleted,when only exist as a key in a weakmap, were the object is removed from memory. whereas in map and set the object is retained.
let objOne = { address: "cbe" };
let weakMapOne = new WeakMap();
weakMapOne.set(objOne, "myAddress");
console.log(weakMapOne); //outputs => key - {address : "cbe"}, value - "myAddress"

objOne = null;
console.log(objOne); //Here the object is no longer exist.
console.log(weakMapOne);

//================================================================================================
//weakset()
//syntax
// new WeakSet()
// weakset only takes objects as values.
// Methods  weakset.add(value),   weakset.has(value),     weakset.size,   weakset.delete(value)
// As works in Set, the weakset also only takes one value, does not allows the duplicated multiple values.

let weakSet = new WeakSet();
let objTwo = { name: "reeve", name: "elon" };
weakSet.add(objTwo);
console.log(weakSet); //Only takes one value, if two identical values are presented means, the last value is taken into account.

//like weakmap , weakset also not iterable.
objTwo = null;
console.log(objTwo); //outputs null.
console.log(weakSet); //outputs the object.
