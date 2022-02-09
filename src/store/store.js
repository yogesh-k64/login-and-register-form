import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { getAuth, signOut } from "firebase/auth";
import addAdminSlice from "./addAdmin";
import investSlice from "./investment";

// const user = localStorage.getItem("user");
// var isLogged = !!user;
const userIntial = {
  userName: "",
  songs: [],
  showSong: false,
  // idToken: token,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userdls",
  initialState: userIntial,
  reducers: {
    onLogin(state, action) {
      state.idToken = action.payload.token;
      state.userName = action.payload.email;
      state.isLoggedIn = true;

      // set time to auto logout (one hour)

      const current = new Date().getTime() + 3600 * 1000; // section expire in ms

      localStorage.setItem("exp-time", current);
    
    },
    onLogout(state) {
      state.idToken = "";
      localStorage.removeItem("exp-time");
      localStorage.removeItem("user");
      state.isLoggedIn = false
 
    },

    getSongs(state, action) {
      state.songs = action.payload;
    },
    showSong(state) {
      state.showSong = !state.showSong;
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    admin: addAdminSlice.reducer,
    invest: investSlice.reducer,
  },
});
export const userAction = userSlice.actions;

export default store;
