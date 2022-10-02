import {
  getDefaultMiddleware,
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { watcherSaga } from "../../saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import movieReducer from "../toolkit/moviesSlice";
import userReducer from "../toolkit/userSlice";
import commentReducer from "../toolkit/commentsSlice";
import ratingReducer from "../toolkit/ratingsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const usersConfig = {
  key: "user",
  storage,
  blacklist: ["users"],
};
const moviesConfig = {
  key: "movie",
  storage,
  blacklist: ["movies"],
};

const reducer = {
  users: persistReducer(usersConfig, userReducer),
  movies: persistReducer(moviesConfig, movieReducer),
  comments: commentReducer,
  ratings: ratingReducer,
};

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

export const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export interface Action {
  type: string;
  payload: any;
}

export default store;
