import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import taskSlice from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    project: projectSlice,
    task: taskSlice,
  },
});
