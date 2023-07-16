// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuai04Csbae7GQuSHoGkp3JpHFB6Uq1gU",
  authDomain: "practice-rdb.firebaseapp.com",
  projectId: "practice-rdb",
  storageBucket: "practice-rdb.appspot.com",
  messagingSenderId: "85125485218",
  appId: "1:85125485218:web:5bd5fd7dea3a3ffb5e3dfb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

let submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.querySelector("#username").value;
  let rN = document.querySelector("#rollNumber").value;
  let email = document.querySelector("#email").value;
  let student = {
    ["Student Name"]: username,
    ["Roll Number"]: rN,
    Email: email,
  };
  set(ref(db, "Students/" + rN), student)
    .then((response) => {
      alert("student detailes created Successfuly");
    })
    .catch((err) => {
      alert("Encounted an error" + err);
    });
});

let updateBtn = document.querySelector("#update");
updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.querySelector("#username").value;
  let rN = document.querySelector("#rollNumber").value;
  let email = document.querySelector("#email").value;
  let student = {
    ["Student Name"]: username,
    Email: email,
  };
  update(ref(db, "Students/" + rN), student)
    .then((response) => {
      alert("student detailes updated Successfuly");
    })
    .catch((err) => {
      alert("Encounted an error" + err);
    });
});
let deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let rN = document.querySelector("#rollNumber").value;

  remove(ref(db, "Students/" + rN))
    .then((response) => {
      alert("student details  removed Successfully");
    })
    .catch((err) => {
      alert("Encounter an error" + err);
    });
});
