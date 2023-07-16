// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqao5AqPkH6J_SOTo8UXesBj7yTJEiUqk",
  authDomain: "project-1-4b883.firebaseapp.com",
  projectId: "project-1-4b883",
  storageBucket: "project-1-4b883.appspot.com",
  messagingSenderId: "607604397663",
  appId: "1:607604397663:web:9053837710007b3f516dea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth();
let submit = document.querySelector("#submit-btn");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userDetails) => {
      console.log(userDetails);
      const db = getDatabase();
      const uid = userDetails.user.uid;
      set(ref(db, "userCollection/" + uid), {
        id: uid,
        username: username,
        email: email,
      });
      alert("user created successfully");
      setTimeout(() => {
        window.location.href = "./signin.html";
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
    });
});
