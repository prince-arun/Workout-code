document.write("Optional chaining");

//Optional chaining ?.
//Optional chaining is a syntax to whether to know if the nested object is presented or not.
//Example:
let objectOne = {
  propertyOne: "hai",
  propertyTwo: 76,
  nestedProperty: {
    npropOne: "nhello",
    npropTwo: "w2353l",
  },
  propertyThree: "welcome",
};
let objectTwo = {};

console.log(objectOne);
console.log(objectOne.nestedProperty);
console.log(objectOne?.nestedProperty); //Here it checks whether the objectOne is true or not. if its declared it goes to second value. if its not , it return undefined.
console.log(objectTwo?.nestedProperty); // Here it returns undefined, because it the nested property is not in the objectTwo.
console.log(objectOne.nestedProperty?.npropThree); //Here the last property is not there.

//Shorty-circuit method
//Object?.prop => It returns Object.prop if object exsists otherwise undefined.
//object?.[prop] => It returns object[prop] if object exist , otherwise undefined.
//object.function?.() => It object.function(), if it exists, otherwise returns undefined.
