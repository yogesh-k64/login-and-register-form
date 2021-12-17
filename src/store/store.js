import { configureStore, createSlice } from "@reduxjs/toolkit";

const userIntial = {
  userName: "",
  password: "",
  isLogged: false,
  onLogin: true,
};

const userSlice = createSlice({
  name: "userdls",
  initialState: userIntial,
  reducers: {
    
    onLogin(state, action) {
      state.isLogged = true;
      state.userName = action.payload.name;
      state.password = action.payload.password;
    },
    onLogout(state) {
      state.isLogged = false;
    },
    formSwitch(state) {
      state.onLogin = !state.onLogin;
    },
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
});
export const userAction = userSlice.actions;

export default store;
