import { createSlice } from "@reduxjs/toolkit";

const investSlice = createSlice({
  name: "investment",
  initialState: {
    transaction: [],
    totalAmount: 0,
  },
  reducers: {
    onAddMoney(state, action) {
      state.totalAmount += +action.payload.amount;
      state.amount = action.payload.amount;
      state.transaction = state.transaction.concat({
        name: action.payload.name,
        amount: action.payload.amount,
        date: action.payload.date,
      });
    },
  },
});
export const investAction = investSlice.actions;

export default investSlice;
