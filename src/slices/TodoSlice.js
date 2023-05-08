import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  job: "",
  jobs: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.job = action.payload;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    deleteJob: (state, action) => {
      let newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      state.jobs = newJobs;
    },
  },
  extraReducers: {},
});

export const { setJob, addJob, deleteJob } = todoSlice.actions;
export const selectJob = (state) => state.todo.job;
export const selectJobs = (state) => state.todo.jobs;

export default todoSlice.reducer;
