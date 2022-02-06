import { initializeApp } from "@firebase/app";
import { createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../firebase/firebase";

const firebaseApp = initializeApp(firebaseConfig);

const addAdminSlice = createSlice({
  name: "addAdmin",
  initialState: {},
  reducers: {
    onCreateAdmin(state, action) {
      console.log("creating user...");

      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password
      )
        .then((userCred) => {
          console.log(userCred);
          console.log("user created");

          const idToken = userCred._tokenResponse.idToken;

          localStorage.setItem("token", idToken);

          const current =
            new Date().getTime() + userCred._tokenResponse.expiresIn * 1000; // section expire in ms

          localStorage.setItem("exp-time", current);
        })
        .catch((error) => {
          console.log("in error catch");
          alert(error.message);
        });
    },
  },
});
export const addAdminAction = addAdminSlice.actions;

export default addAdminSlice;
