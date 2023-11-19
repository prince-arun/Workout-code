//Number methods
//stating 0
let a = 10000;
let b = 1e4;

a = 0.0001;
b = 1e-4;
console.log(a, b);

//num.toString(base)
let c = 45858;
let d = c.toString();
console.log(typeof d, d);

//rounding numbers
//Math.floor(num)
let e = 34.3;
console.log(Math.floor(e));
console.log(Math.ceil(e));
console.log(Math.trunc(e));
console.log(Math.round(e));

let f = 34.5534;
console.log(Math.round(f * 1000) / 100);
console.log(+f.toFixed(3));

//finite & Nan
//isNan
let g = "ghth";
g = "45";
console.log(isNaN(g));

//isFinite
let h = Infinity;
h = "78";
console.log(isFinite(h));

//Number.isNan
let i = "hel";
console.log(Number.isNaN(i));

//parseint
let j = "356px";
console.log(parseInt(j));

j = 34.454;
console.log(parseFloat(j));

//Math.max(numbers with comma)
console.log(Math.max(3, 4, -5, 45));
console.log(Math.min(3, 4, -5, 45));

console.log(Math.pow(3, 2));

console.log(
  "======================================================================================"
);

//String methods.......

let str = "helloworld";
console.log(str.length);

console.log(str.at(-1));
console.log(str[3].toUpperCase());

//str.indexOf(substr, pos)
str = "hello world folks";
console.log(str.indexOf("lo", 2));

//str.includes, str.startswith, str.endswith
//str.slice(start, end)
//str.substr(start, length)

let ht = "welcome";
console.log(ht.slice(3));

console.log(ht.repeat(4));

//Array

let dgg = ["hekk", "hgkk", "otiit"];

console.log(dgg[2]);
console.log(dgg[dgg.length - 1]);
console.log(dgg.at(-2));

//array methods

console.log(dgg.pop());
console.log(dgg.push(4));
console.log(dgg.shift());
console.log(dgg.unshift(87));

console.log(dgg);

//loop
// for (let dg of dgg) {
//   alert(dg);
// }

//arr.splice(start, deletecount, insertion)

let arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 0, "second", "third");
console.log(arr);

//arr.concat
let nar = arr.concat([4, 8888, 90]);
console.log(nar);

arr.forEach((item, index, array) => {
  console.log(`item${item}, index${index}, array${array}`);
});

//arr.indexOf(item, start)
console.log(nar.indexOf(8888));
console.log(nar.includes("second"));

//finds the first match
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

let newUser = users.find((u) => {
  let result = u.id === 1;
  return result;
});

console.log(newUser);

//arr.filter same as find. but filter as many as there are

//arr.map method
let map = users.map((us) => {
  console.log(us.id, us.name);
});

//arr.reverse()
//arr.split(delimiter)
//arr.join()

//arr.reduce(acc, item, index, arr)

let clar = [3, 4, 5, 6, 5, 4, 6];
let valuE = clar.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log(valuE);
console.log(Array.isArray(clar));

//ascending order
let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

let asc = myArray.slice().sort((a, b) => a - b);
let dsc = myArray.slice().sort((a, b) => b - a);
console.log(asc);
console.log(dsc);

let even = myArray.filter((ev) => ev % 2 === 0);
let odd = myArray.filter((od) => od % 2 !== 0);
console.log(even);
console.log(odd);

//map
let imap = new Map();
imap.set(45, "age");
imap.set(true, 80);
imap.set([3, 4, 4], "array");

console.log(imap);
console.log(imap.get(true));
console.log(imap.has(54));
console.log(imap.delete(45));
console.log(imap.size);
imap.clear();
console.log(imap);

//Object.Entries => object to map
//Object.fromEntries =>
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
let mapn = new Map(Object.entries(details));

console.log(details);

//Set

let set = new Set();
myArray.forEach((item) => {
  set.add(item);
});

console.log(set);

//set.has(key)
//set.has()
//set.size
//set.clear()

console.log(
  "******************************************************************************************"
);

//promises
// pending - fullfiled or rejected (settled)
//          if fullfilled - promise resolved
//          if rejected - promise outputs error

setTimeout(() => {
  alert("hello world");
}, 5000);

let getData = async () => {
  await fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .catch((err) => err);
};

getData();

function gettingData() {
  fetch("url")
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      //process data
    })
    .catch((err) => console.log(err));
}

gettingData();

let getAsyncData = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.json();
    //process data
  } catch (err) {
    console.log(err);
  }
};

getAsyncData();
