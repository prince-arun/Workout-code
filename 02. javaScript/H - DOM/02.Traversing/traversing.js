//Traversing through Elements (nodes)
//1.Child to Parent
//parentNode
//2.Parent to Child
//1.firstElementChild
//2.lastElementChild
//3.Sibling
//1.nextElementSibling
//2.previousElementSibling

//1.Child to Parent
console.log(
  "---------------------------Child to Parent----------------------------"
);
let navBar = document.querySelectorAll("li")[1];
console.log(navBar);
console.log(navBar.parentNode);

//2.Parent to child
console.log(
  "---------------------------Parent to Child----------------------------"
);

//firstChild    => returns the first child of a parent of any node type.
//lastChild     => returns the last child of a parent of any node type.
//firstElementChild     => returns the first child of a parent of element node type.
//lastElementChild      => returns the last child of a parent of element node type.
//childNodes      => returns all the child of a parent of every node type.
//children        => returns all the child of a parent of element node type.
let list = document.querySelector("ul");
console.log(list);
console.log(list.firstChild);
console.log(list.firstElementChild);
console.log(list.lastChild);
console.log(list.lastElementChild);
console.log(list.childNodes);
for (let l of list.childNodes) {
  console.log(l.textContent);
}
console.log(list.children);
for (let l2 of list.children) {
  console.log(l2.textContent);
}

//3.Sibling
console.log("---------------------------Sibling----------------------------");
let h2 = document.querySelector("h2");
console.log(h2);
console.log(h2.nextElementSibling.innerHTML);

let fourthElement = document.querySelectorAll("li")[2].nextElementSibling;
console.log(fourthElement);
console.log(fourthElement.parentNode.previousElementSibling);
console.log(fourthElement.previousElementSibling);
console.log("-----------------------loop-------------------");

//loop
let firstChild = document.getElementById("list").firstElementChild;
console.log(firstChild);

while (firstChild) {
  console.log(firstChild.innerHTML);
  firstChild = firstChild.nextElementSibling;
}

console.log(
  "==============================================================================================================="
);
