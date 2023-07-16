let addValue = () => {
  //getting value one
  let numOne = Number(document.getElementById("valueOne").value);
  let numTwo = Number(document.getElementById("valueTwo").value);

  //Adding the value
  let result = numOne + numTwo;

  //inserting the value in paragraph;
  let para = document.getElementById("results");
  para.innerHTML = " Addition : " + result;

  //styling results
  para.style.color = "green";
};
//------------------------------------------------------------------------------------------------------------------------------
//selecting elements or objects in DOM
//1.getElementsById()
let heading = document.getElementById("headTwo");
console.log(heading);
console.log(heading.textContent);

//----------------------------------------------------------------------------------------
//2.getElementsByClassName()
//When using className it returns collection of items with index value.
//we can also use index value to access particular items.
let listItems = document.getElementsByClassName("listItems");
console.log(listItems);
console.log(listItems[1]);

//When using for..of loop in class selector,it returns tag with content like id.
//   for (let items of listItems) {
//     console.log(items);
//     console.log(items.textContent);
//   }
let newLitItem = Array.from(listItems).map((newItem, index) => {
  console.log(`Index value ${index} : `, newItem);
});
console.log(
  "=================================================================================================================="
);

//----------------------------------------------------------------------------------------
//3.getElementsByTagName()
//It outputs as a HTML collection
let tagH2 = document.getElementsByTagName("h2");
console.log(tagH2);
console.log(tagH2[0]);

for (let headItem of tagH2) {
  console.log(headItem.textContent);
}
console.log(
  "===================================================================================================================="
);
//------------------------------------------------------------------------------------------
//4.querySelector()
let topic = document.querySelector("ol");
console.log(topic);
console.log(topic.textContent);

//5.querySelectorAll()
//it outputs as node lists
//in node list we can use forEach method
let oldList = document.querySelectorAll("ol .listItems");
console.log(oldList);
oldList.forEach((listOld) => {
  console.log(listOld.textContent);
});
