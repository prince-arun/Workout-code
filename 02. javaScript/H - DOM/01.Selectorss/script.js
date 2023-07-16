//DOM - Manipulation
//Dom tree
//DOM - elements (nodes)also called as Objects
//DOM Selectors
//1.document.getElementById()
//2.document.getElementsByClassName()
//3.document.getElementsByTagName()
//4.document.getElementsByName()

//----------------------------------------------------------------------------------
//1.document.getElementById()
let para = document.getElementById("paraTwo");
console.log(para);
console.log(para.textContent);

//2.document.getElementsByClassName()
let listItems = document.getElementsByClassName("lists", "not a lists");
for (let lt of listItems) {
  console.log(lt.textContent);
}
console.log(listItems);
//To see the content of multiple items,we need to iterate
let newItems = Array.from(listItems).map((lists) => console.log(lists));

//3.document.getElementsByTagName()
let tagName = document.getElementsByTagName("h1");
console.log(tagName);
for (let tags of tagName) {
  console.log(tags.textContent);
}
let newTags = Array.from(tagName).map((sTag) => console.log(sTag));

//document.querySelector()
//document.querySelectorAll()

let heading = document.querySelector("h1");
console.log(heading);
console.log(heading.textContent);

//document.querySelectorsAll()
let groupS = document.querySelectorAll("ul li");
console.log(groupS);

//document.getElementsByName()
let radio = document.getElementsByName("language");
console.log(radio);
