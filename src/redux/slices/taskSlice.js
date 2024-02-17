import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    newTask(state, action) {
      state.items = action.payload;
    },
  },
});
export const { newTask } = taskSlice.actions;

export default taskSlice.reducer;
