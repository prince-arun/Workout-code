let h1 = document.querySelector("h1");
console.log(h1);
h1.classList.add("one", "two", "three");
console.log(h1.classList);
h1.classList.remove("two");
h1.classList.replace("three", "slime");
console.log(h1.classList);
h1.classList.toggle("two");
console.log(h1.classList);
h1.classList.toggle("slime");
for (const classL of h1.classList) {
  console.log(classL);
}
console.log(h1.classList.contains("two"));
console.log(h1.classList.contains("three"));

let body = document.body;
console.log(body.offsetWidth);
console.log(body.offsetHeight);
