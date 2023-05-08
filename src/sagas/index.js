import { all } from "redux-saga/effects";
import helloSaga from "./helloSaga";
import watchIncrementAsync from "./incrementSaga";

function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}

export default rootSaga;
