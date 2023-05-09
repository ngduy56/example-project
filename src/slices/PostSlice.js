import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostThunk = createAsyncThunk("post/fetchPost", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});
const initialState = {
  loading: "",
  posts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPostThunk.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchPostThunk.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { setPost } = postSlice.actions;
export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;
