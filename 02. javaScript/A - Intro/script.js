// JavaScript is a programming language used for creating interactive web pages.

// You can use JavaScript to add interactivity to your website, such as responding to user input or changing the appearance of elements on a page.

// Here's an example of using JavaScript to change the text of an HTML element:

const element = document.getElementById("my-element");
element.innerText = "Hello, JavaScript!";

// In this example, we use the document object to get a reference to an HTML element with the ID "my-element". We then use the innerText property to change the text inside that element.

// JavaScript can also be used for more complex tasks, such as making API calls or creating dynamic visualizations.

// To start using JavaScript in your web projects, simply include a script tag in your HTML file and write your code inside it:

//script
// Your JavaScript code goes here
//script

// That's a basic introduction to JavaScript in JavaScript code. Happy coding!
//------------------------------------------------------------------------------------------------
// Declare variables using var, let, or const
let myVariable = "Hello, world!";
const PI = 3.14159;

// JavaScript data types
let myString = "This is a string";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObject = { name: "John", age: 30 };

//================================================================================================

// Declare a function with parameters
function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function and store the result in a variable
let greeting = greet("World");
console.log(greeting); // "Hello, World!"

//================================================================================================

// Use an if/else statement to make a decision
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a child");
}

// Use a for loop to repeat a block of code
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//================================================================================================

// Create an object with properties and methods
let person = {
  name: "John",
  age: 30,
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// Call a method on an object
person.sayHello();

// Create a class with a constructor and methods
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log("Driving a " + this.make + " " + this.model);
  }
}

// Create an instance of a class and call a method on it
let myCar = new Car("Toyota", "Corolla");
myCar.drive();

//================================================================================================

// Use a callback function to handle an asynchronous operation
function fetchData(callback) {
  setTimeout(function () {
    let data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log(data); // { name: "John", age: 30 }
});

// Use a promise to handle an asynchronous operation
function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
}

fetchData().then(function (data) {
  console.log(data); // { name: "John", age: 30 }
});

// Use async/await to handle an asynchronous operation
async function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
}

async function main() {
  let data = await fetchData();
  console.log(data);
}
