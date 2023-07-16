import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe1YfVZRv_vActiVOLfCW5fz6I58Wf-NM",
  authDomain: "product-listing-654e9.firebaseapp.com",
  projectId: "product-listing-654e9",
  storageBucket: "product-listing-654e9.appspot.com",
  messagingSenderId: "317942137024",
  appId: "1:317942137024:web:beb5e0339e9abdc5fcad25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
