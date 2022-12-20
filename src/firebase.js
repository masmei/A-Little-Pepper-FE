// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMsjzvmGwa6f8LjKtAjtav6rpPDnYCFj0",
  authDomain: "littlepepper-951c0.firebaseapp.com",
  projectId: "littlepepper-951c0",
  storageBucket: "littlepepper-951c0.appspot.com",
  messagingSenderId: "701727530671",
  appId: "1:701727530671:web:1c9f4763da89e1c33d7e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
