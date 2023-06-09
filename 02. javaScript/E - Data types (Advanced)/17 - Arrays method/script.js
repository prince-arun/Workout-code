document.write("Array Method");

//Arrays methods
//    1.array.push()
//    2.array.pop()
//    3.array.unshift()
//    4.array.shift()
//    5.array.splice()
//To remove and insert a element from array.
//array.splice(start, deleteCount, insertElement1, ....insertElement-n )
let myArray1 = ["my", "name", "is", "arun", "prince"];
console.log(myArray1.length); //length is 5.

let myArray2 = myArray1.splice(3, 2, "Elon", "Musk");
console.log(myArray1); //arrays also copy by reference, so here the value changed.
console.log(myArray2); // this array returns the removed arrays.
myArray1.splice(3, 2, "obito", "uchiha");
console.log(myArray1);

//To add an element without deleting them
myArray1.splice(1, 0, "actual");
console.log(myArray1);

//---------------------------------------------------------------------------------------------
//we can also use arr.slice(start, end) method. it copies into a new array, leaving the original arrays unchanged.
myArray1.slice(1, 4);
console.log(myArray1.slice(1, 4)); //it outputs the copy of changes, it does not affect the original arrays.
console.log(myArray1);

//array.concat(arg1, arg2,.....argN)
console.log(myArray1.concat(1, 2, 3, 4, 5)); //it concate the argument to the end of the arry.
console.log(
  "============================================================================="
);

//=============================================================================================
//searching in arrays
//  1.array.indexOf()
//  2.array.includes()

//array.indexOf(indexValue) => search for the item in the array, and returns the index value of that element.
let a = [1, 2, 3, 4, 5];
console.log(a.indexOf(1)); //returns 0, because 0 is the index value of 1.
a = ["hai", "hello", "welocme"];
console.log(a.indexOf("hello")); //hello is index of 1.
console.log(a.indexOf("prince")); // if the element isn't present in the array, it returns -1.

//array.includes() => it works same as indexValue(), but it only checks whether the element is present or not, if present it returns true, or it returns false.

let b = [0, 1, 2, 3, 4, 5];
console.log(b.includes(2)); //true => this array has element 2.
console.log(b.includes(6)); //false => 6 is not included in the array.
console.log(b.includes(Number)); //false, it doesn't search based on data types.
console.log(
  "//////////////////////////////////////////////////////////////////////////////"
);

//==============================================================================================

//foreach()
//array.foreach(item, index, array) => {
//        code
//}
let a1 = ["hello", "hai", "welcome"];
a1.forEach((item, index, array) => {
  console.log(
    `( ${item} ) is the index of  ( ${index} ) in the array  [ ${array} ]`
  );
});
//find()

console.log("/////////////////////////////////////////////////////////");
//----------------------------------------------------------------------------------------------

//Transform an Array
//array.map()
//syntax
//let newArray = array.map(function(currentvalue, index, array){

//})
let a2 = [1, 2, 3, 4, 5, 6];
let a3 = a2.map((mul) => {
  return mul * 5;
}); //Here mul is a function name.

console.log(a3);
//----------------------------------------------------------------------------------------------
//array.sort()

//array.sort() sort the elements in a array.
let c = [1, 92, 53, 4];
c.sort();
console.log(c);

//if we want to sort to a specific order we can create a function that tells how to sort the elements and give the function as a argument.
function arrangeNumber(a, b) {
  //sorting function.
}
c.sort(arrangeNumber()); //Here we tells the sort method to how to sort using that function.

//array.reverse() method
console.log(a2.reverse());

console.log("================================================================");

//-------------------------------------------------------------------------------------------

//array.split(delimiter)

let str = "welcome, Hello, Hai";
let strArr = str.split("");
console.log(strArr);

//array.join(glue)

let strTwo = ["h", "i", "ok", "hry", "hgo", "oghg", "r", "jgo", "g"];
let strArrTwo = strTwo.join("");
console.log(strArrTwo);

//---------------------------------------------------------------------------------------------
//array.isArray() method
//isArray() method tells whether the given input is a array or not. If it is an Array, it returns true, otherwise false.
