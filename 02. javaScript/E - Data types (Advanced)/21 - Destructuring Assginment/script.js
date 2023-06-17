//1 - Start with simple examples:
//2 - Practice with nested data structures:
//3 - Use default values:
//4 - Experiment with renaming variables:
//5 - Use destructuring in function parameters:

console.log(
  "--------------------------SIMPLE EXAMPLES--------------------------------------"
);
//1 - Start with simple examples:-----------------------------------------------------------
//1.1 - Array
let oneArr = [10, 20];
let [ten, twenty] = oneArr;
console.log(`${ten} and ${twenty}`); //=> 10 and 20
//1.2 - Object
let oneObj = { name: "prince", age: 25 };
let { name, age } = oneObj;
console.log(`${age} and ${name}`); //=> 25 and prince

let { name: firstName, age: myAge } = oneObj;
console.log(`${firstName} and ${myAge}`);
console.log(
  "-------------------------NESTED DATA STRUCTURE-------------------------------------"
);
//2 - Practice with nested data structures:------------------------------------------------
//2.1 - Array
let twoArr = ["apples", ["red", "green"], "orange", ["yellow", "lightgreen"]];
let [ele1, [ele11, ele12], ele2, [ele21, ele22]] = twoArr;
console.log(twoArr);
console.log(`${ele1} has ${[ele11, ele12]} /// ${ele2} has ${[ele21, ele22]}`);
//2.2 - Object
let twoObj = {
  userOne: { uName: "reeve", uLocation: "India" },
  userTwo: { uName: "musk", uLocation: "USA" },
};
let {
  userOne: { uName: fUname, uLocation: fLoc },
  userTwo: { uName: sUname, uLocation: sLoc },
} = twoObj;
console.log(twoObj);
console.log(`${fUname} in ${fLoc} /// ${sUname} in ${sLoc}`);
console.log(
  "---------------------USING DEFAULT VALUE----------------------------"
);
//3 - Use default values:------------------------------------------------------
//3.1 - Array
let threeArr = ["one", "two", (frValue = "four")];
let [fValue, sValue, , tValue = "three"] = threeArr;
console.log(`${frValue} and  ${tValue} and ${sValue} and ${fValue}`);
//3.2 - Object
let threeObj = { f: "firstValue", s: "secondValue" };
let { f: fV, s: sV, t: tV = "thirdValue" } = threeObj;
console.log(`${tV} and ${sV} and ${fV}`);
console.log(
  "----------------------DESTRUCTURING IN FUNCTION---------------------------"
);
//5 - Use destructuring in function parameters:
function userDetails({ name, age }, bio) {
  console.log(
    `The user's name is ${name} and his age is ${age} and his bio is ${bio}`
  );
}
let user = { name: "ArunPrince", age: 26 };
let bio = ["we win we lose"];
userDetails(user, bio);
