// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d3c8e.firebaseapp.com",
  projectId: "mern-blog-d3c8e",
  storageBucket: "mern-blog-d3c8e.appspot.com",
  messagingSenderId: "919546761986",
  appId: "1:919546761986:web:ca1cf9a64b666af5b9a81b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);