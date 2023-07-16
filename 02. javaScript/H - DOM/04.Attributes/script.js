let h1 = document.querySelector("h1");
console.log(h1);
let para = document.querySelector("p");
console.log(para);

h1.setAttribute("id", "heading");
console.log(h1.getAttribute("id"));

para.setAttribute("className", "para");
console.log(para.getAttribute("className"));

h1.removeAttribute("id");
console.log(h1.attributes);

console.log(para.hasAttribute("className"));
