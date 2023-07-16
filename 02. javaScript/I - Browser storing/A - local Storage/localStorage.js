//localstorage
//it is a window object, which is used to store items and objects in browser local storage.
//it has five methods
//window.localstorage
//localstorage.methods
//setItem("key", "value")
//getItem("key")
//removeItem("key")
//clear()
//length.

//   console.log(localStorage);
//   //Adding value
//   localStorage.setItem("userName", "Arun");
//   localStorage.setItem("Age", 23);
//   localStorage.setItem("isAdmin", true);

//   //Accessing value
//   console.log(localStorage.getItem("userName"));
//   console.log(localStorage.getItem("Age"));
//   console.log(localStorage.getItem("isAdmin"));

//   //remove value
//   console.log(localStorage);
//   localStorage.removeItem("isAdmin");
//   console.log(localStorage);

//   //clear
//   localStorage.clear();
//   console.log(localStorage);

let user1 = {
  firstName: "prince",
  lastName: "arun",
  age: 24,
  isUser: false,
};
localStorage.setItem("user1", JSON.stringify(user1));
console.log(localStorage);
let value = localStorage.getItem("user1");
console.log(JSON.parse(value));
