// Object constructor arrow function
const Person = (name, age) => {
  this.name = name;
  this.age = age;
  this.greet = () => {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
};

// Creating new instances of the Person object
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

// Accessing properties and calling methods
console.log(person1.name); // Output: "Alice"
console.log(person2.age); // Output: 30
person1.greet(); // Output: "Hello, my name is Alice and I am 25 years old."
person2.greet(); // Output: "Hello, my name is Bob and I am 30 years old."

//   In this example, Person is defined as an arrow function instead of a regular function. The name and age parameters are passed to the arrow function as arguments, and the properties (name and age) are assigned to this, similar to the previous example.

// The greet method is also defined as an arrow function within the constructor. It uses template literals (enclosed in backticks) to create a formatted string for the greeting message.
