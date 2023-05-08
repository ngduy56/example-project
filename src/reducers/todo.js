import { SET_JOB, ADD_JOB, DELETE_JOB } from "../constants";

const initialState = {
  job: "",
  jobs: [],
};
const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;

    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;

    case DELETE_JOB:
      let newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;

    default:
      return state;
  }
  return newState;
};
export default reducer;

export const fetchTodo = () => (dispatch, getState) => {
  console.log(getState());
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
//  fetchTodoThunk = (dispatch, getState) {
//   console.log(getState());
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
// };
