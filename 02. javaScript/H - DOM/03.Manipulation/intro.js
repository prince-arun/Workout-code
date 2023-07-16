//Task
//when the button is clicked, list of items to be added to ul.
let listItems = ["Home", "About", "Projects", "Contact"];

//step
//we need to create list element.
//we need to separate the values in arrays.
//we need to add the value to li.
//when the button clicked , the li are to be added inside ul.

let uLIst = document.getElementById("list");

function addChileElement(items) {
  let list = document.createElement("li");
  list.innerHTML = items;
  uLIst.appendChild(list);
}

let button = document.getElementById("btn");
button.addEventListener("click", () => {
  listItems.forEach((newItem) => {
    addChileElement(newItem);
  });
});
