// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 export const firebaseConfig = {
  apiKey: "AIzaSyBdRROKBXisvhkETPSFuP9ObgCT45EoZyY",
  authDomain: "login-and-register-with-react.firebaseapp.com",
  projectId: "login-and-register-with-react",
  storageBucket: "login-and-register-with-react.appspot.com",
  messagingSenderId: "611974557103",
  appId: "1:611974557103:web:9f6040c8e8747eb488d35a"
};

// Initialize Firebase
export const app= initializeApp(firebaseConfig);
