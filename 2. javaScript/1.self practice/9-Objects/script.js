//Objects
//syntax
//Declared variable = {key:value};
//using {..} figure brackets to declare object is called "Object literals"
let boxOne = {
  userName: "Arun", // Key : value => pair
  age: 35, // here 'Key' => also called as 'name' or 'identifier'.
  education: "undergraduate", //here last property may have comma(,)it's called trailing comma => we can add properties and move around with later.
};
console.log(boxOne);

//we can access the properties inside an objects using dot notation. (variable.value)
//example:
console.log(boxOne.age);
console.log(typeof boxOne);

//to add a property (variable.newkey = newValue)
boxOne.experience = "5years";
console.log(boxOne);

//to remove a property(delete variable.property)
delete boxOne.education;
console.log(boxOne);

//multiword properties
let boxTwo = {
  firstName: "prince",
  ["one two three"]: 45,
  lastName: "elon",
};
console.log(boxTwo);
console.log(boxTwo["one two three"]); //multi word properties can't access dot notation. instead use square brackets []

boxTwo["four five six"] = 55;
console.log(boxTwo);

delete boxTwo["one two three"];
console.log(boxTwo);

//Computed properties
//computed properties are used to take value or name from runtime.
let one = prompt("enter your full name here", "arunprince");

let boxthree = {
  [one]: "Good man",
};
console.log(boxthree); //use dot.notation for simple objects. use square brackets for complex object properties.

//objects property name can be anything , even reserved word can also be used. there is no limitation in using property variable.

let cabin = {
  tech: "computer",
  age: 65,
  things: true,
};
/*
task 1------------------------------------------------
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/
let user = {};
user.firstName = "John";
user.surName = "Smith";
user.firstName = "pete";
console.log(user);
delete user.firstName;
console.log(user);

//for..in loop
//syntax
/*  for(let variableName in objectName){
    code
}
*/
//first there will be a objects
//in the for in loop, we declare a variable using let and iterates over properties of that objects.
//in the first iteration, the variable name set to first property .
//in the second iteration , the variable name set to the second property.
//then when we call the variable, it is set to the all of property inside the objects.
console.log(
  "========================================================================="
);
let container = {
  veg: "cabbage",
  fruit: "mango",
  dryNuts: 89,
};

for (let fridge in container) {
  console.log(fridge); // it iterates in the loop and only shows the property name , not the value.
  console.log(container[fridge]); //it iterates and shows both property name and its value of the object.
  console.log(container); // this is a special case. Here we iterate whole object in the for..in loop. so the loop iterates three time, because there are three properties, and when we console that objects which are in for..in loop, it returns the value respective to how many loop it iterates.
}

//integer property
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49  to change this order to given order we make the property name to non-integer.
}

isEmpty = () => Object(undefined);
console.log(isEmpty);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sum() {
  sum = salaries[John + Ann + Pete];
  sum == 390 ? console.log(sum) : console.log(0);
}

sum();
