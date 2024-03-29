// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd-boPtsTb2hBmG0ePGrwacn4H-zU1bdE",
  authDomain: "practice-cb098.firebaseapp.com",
  projectId: "practice-cb098",
  storageBucket: "practice-cb098.appspot.com",
  messagingSenderId: "421183677226",
  appId: "1:421183677226:web:e8a1ce900310e7ca03b453",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth();

let submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      alert("user logged in successfully");
      setTimeout(() => {
        window.location.href = "./prof.html";
      }, 2000);
    })
    .catch((err) => console.log(err + `There is an error`));
});
