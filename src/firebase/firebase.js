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
const app= initializeApp(firebaseConfig);
/* 
  // On sign up.
exports.processSignUp = getAuth(app)
.user()
.onCreate(async (user) => {
  // Check if user meets role criteria.
  if (
    user.email &&
    user.email.endsWith("@admin.com") &&
    user.emailVerified
  ) {
    const customClaims = {
      admin: true,
      accessLevel: 9,
    };

    try {
      // Set custom user claims on this newly created user.
      await getAuth(app).setCustomUserClaims(user.uid, customClaims);

      // Update real-time database to notify client to force refresh.
      const metadataRef = getDatabase().ref("metadata/" + user.uid);

      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      await metadataRef.set({ refreshTime: new Date().getTime() });
    } catch (error) {
      console.log(error);
    }
  }
});
*/