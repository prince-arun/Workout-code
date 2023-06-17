//JSON - JavaScript Object Notation is data formate that is platform independent.
//JSON - Methods
//1.json.stringify()    => converts Objects into JSON.
//2.json.parse()        => converts JSON into Objects.

//example:
let obj1 = {
  firstName: "arun",
  lastName: "prince",
  age: 23,
  isRich: true,
};

let json1 = JSON.stringify(obj1);
console.log(json1); // => {"firstName":"arun","lastName":"prince","age":23,"isRich":true}
console.log(typeof json1); // => string

let obj2 = JSON.parse(json1);
console.log(obj2);
