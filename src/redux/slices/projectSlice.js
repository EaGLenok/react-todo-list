import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
};

export const counterSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});
export const {} = counterSlice.actions;

export default counterSlice.reducer;
