import {
  getDefaultMiddleware,
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { watcherSaga } from "../../saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import movieReducer from "../toolkit/moviesSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  movies: movieReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
