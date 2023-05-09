import { put, select, take, takeEvery } from "redux-saga/effects";
import { setPost } from "../slices/PostSlice";
import axios from "axios";

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  let posts = [];
  const res = axios.get("https://jsonplaceholder.typicode.com/posts");
  if (res) {
    posts = res.data;
  }
  yield put({ type: setPost().type, posts });
  const state = yield select();
  console.log(state);
}
// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}
export default watchIncrementAsync;
