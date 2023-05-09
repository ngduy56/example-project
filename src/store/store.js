// import rootReducer from "../reducers";
// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "../sagas";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga);

// export const action = (type) => store.dispatch({ type });

// export default store;

import { combineReducers, createStore } from "redux";
import todoReducer from "../slices/TodoSlice";

const staticReducers = {
  todo: todoReducer,
};

export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState);
  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}
