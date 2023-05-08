import { combineReducers } from "redux";
import todoReducer from "../slices/TodoSlice";
import postSlice from "../slices/PostSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
  post: postSlice,
});

export default rootReducer;
