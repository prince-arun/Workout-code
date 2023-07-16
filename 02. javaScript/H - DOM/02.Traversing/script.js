//document.createElement("new element tag")
//document.appendChild()
//element.innerHTML = "inserting new value"
//element.textContent = "inserting new value"

//We are going to add list of property below the h1.
//creating ul
let uLIst = document.createElement("ul");
document.body.appendChild(uLIst);

//now creating list items to add
let listItemOne = document.createElement("li");
listItemOne.textContent = "It is like magic";
uLIst.appendChild(listItemOne);

let listItemTwo = document.createElement("li");
listItemTwo.textContent = "we can custamize that";
uLIst.appendChild(listItemTwo);

let listItemThree = document.createElement("li");
listItemThree.textContent = "we can create new things";
uLIst.appendChild(listItemThree);

let btn = document.createElement("button");
btn.id = "button";
btn.innerHTML = "press ME!";
uLIst.appendChild(btn);

//adding events
let button = document.getElementById("button");
button.addEventListener("click", () => {
  uLIst.style.color = "green";
});
