import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
// const navigate= useNavigate();
const token = localStorage.getItem('token');
var isLogged= !!token
const userIntial = {
  userName: "",
  songs: [],
  showSong: false,
  idToken: token,
  isLoggedIn:isLogged
};


const userSlice = createSlice({
  name: "userdls",
  initialState: userIntial,
  reducers: {
    onLogin(state, action) {
      state.idToken = action.payload.token;
      state.userName = action.payload.email;
      state.isLoggedIn=!!state.idToken
    
      // state.password = action.payload.password;
      // navigate('/welcome',{replace:true})
    },
    onLogout(state) {
      state.idToken = "";
      state.isLoggedIn=!!state.idToken

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
  reducer: { user: userSlice.reducer },
});
export const userAction = userSlice.actions;

export default store;
