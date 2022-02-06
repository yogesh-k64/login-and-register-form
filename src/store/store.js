import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";
import addAdminSlice from "./addAdmin";

const token = localStorage.getItem("token");
var isLogged = !!token;
const userIntial = {
  userName: "",
  songs: [],
  showSong: false,
  idToken: token,
  isLoggedIn: isLogged,
};

const userSlice = createSlice({
  name: "userdls",
  initialState: userIntial,
  reducers: {
    onLogin(state, action) {
      state.idToken = action.payload.token;
      state.userName = action.payload.email;
      state.isLoggedIn = !!state.idToken;
    },
    onLogout(state) {
      state.idToken = "";
      state.isLoggedIn = !!state.idToken;
      const auth = getAuth();
      signOut(auth).then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("exp-time");
      });
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
  reducer: { user: userSlice.reducer, admin: addAdminSlice.reducer },
});
export const userAction = userSlice.actions;

export default store;
