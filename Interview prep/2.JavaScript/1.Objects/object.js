//We can create Object using one of two methods.

//Object constructor
let objc = new Object();

//Object literal
let objl = {
  name: "Arun Prince",
  age: 45,
  isGood: true,
};

//view keypropertis in object
console.log(objl.name);
console.log(objl.age);

//adding new property to object
objl.value = 465665657466578847475647n;
objl.age = "no age";

console.log(objl);

//squre notation to use multipart words
objl["country visited"] = ["usa", "india", "japan"];

console.log(objl);

console.log("----------------------------------");

//the "in" property

console.log("age" in objl);

//for in loop
for (let key in objl) {
  console.log(`key : ${key}\nvalue : ${objl[key]}`);
}

//object cloning
let a = {
  name: "elon",
  age: 34,
  isGood: true,
};

let b = {};

for (let key in a) {
  b[key] = a[key];
}

console.log(a);
console.log(b);

//object.assign

let c = {};
Object.assign(c, objl);

console.log(c);

//nested cloning

let details = {
  name: "elon",
  age: 56,
  isGood: true,
  address: {
    street: "abc street",
    district: "tirupur",
  },
  hobbies: [2, 3, 4, 55, "hello"],
};

console.log(details);

let empDet = structuredClone(details);

console.log(empDet);

//this method

// let objt = {
//   greet: "hello",
//   name: "prince",
//   welcome() {
//     alert(`${this.greet} ${this.name}`);
//   },
// };

// console.log(objt);

// objt.welcome();

//constructor function

const Person = function (name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
};

const arun = new Person("arunprince", 45, "india");

console.log(arun);

console.log(new Person());

//optional chaining
let user = {};

console.log(user.name);
console.log(user?.name);

//symbol

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(`${id1.toString()} : ${id2.toString()}`);

console.log(id1 === id2);
