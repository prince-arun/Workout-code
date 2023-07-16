//Adding Methods
//1.Before and After
let h3 = document.createElement("h3");
h3.innerHTML = "This is heading";
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  let h2 = document.querySelector("h2");
  h2.before(h3);
  // h2.after(h3);
});

//-------------------------------------------------------------------------------------------
//2.insertAdjustcendHTML(ref, element)
//reference type
//before begin => add before the reference.
//after end => add after the reference.
//after begin => add before its first child.
//before end => add after its last child.

let list = document.getElementById("list");
let h32 = document.createElement("h3");
h32.innerHTML = "this is heading32";
list.insertAdjacentElement("beforebegin", h32);

let li2 = document.createElement("li");
li2.innerHTML = "list two";
list.insertAdjacentElement("afterbegin", li2);

let p = document.createElement("p");
p.innerHTML = "this is a paragraph contains 7 words";
list.insertAdjacentElement("afterend", p);

let li1 = document.createElement("li");
li1.innerHTML = "list one";
list.insertAdjacentElement("beforeend", li1);

//-------------------------------------------------------------------------------------------
//3.replaceChild(newChild, oldChild)
//parent.replaceChild()
let newLi = document.createElement("li");
newLi.innerHTML = "new list";
list.replaceChild(newLi, li2);

//-------------------------------------------------------------------------------------------
//4.removeChild(removable child)
//parentEle.removeChild()
list.removeChild(li1);

//------------------------------------------------------------------------------------------
//5.clone node
//originalNode.cloneNode(deep)
//deep => true clone with inner elements.
//deep => false clone the element without innerElements

p.appendChild(list.cloneNode(true));
