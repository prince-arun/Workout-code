// Declare an array using let
let fruits = ["apple", "banana", "orange"];

// Accessing elements in the array
console.log(fruits[0]); // Output: "apple"
console.log(fruits[2]); // Output: "orange"

// Modifying elements in the array
fruits[1] = "grape";
console.log(fruits); // Output: ["apple", "grape", "orange"]

// Declare an array using const
const numbers = [1, 2, 3, 4, 5];

// Accessing elements in the array
console.log(numbers[2]); // Output: 3

// Array length
console.log(numbers.length); // Output: 5

// Adding elements to the array
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// Removing elements from the array
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5]
