import { configureStore, createSlice } from "@reduxjs/toolkit";

const userIntial = { userName: "", password: "", isLogged: false };

const userSlice = createSlice({
  name: "userdls",
  initialState: userIntial,
  reducers: {
    onLogin(state) {
        state.isLogged=true;
    },
    onLogout(state){
        state.isLogged=false;
    }
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
});
export const userAction= userSlice.actions;

export default store;
