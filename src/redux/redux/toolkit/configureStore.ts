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

const config = {
  key: "main-root",
  storage,
};

const reducer = combineReducers({
  users: userReducer,
  movies: movieReducer,
  comments: commentReducer,
  ratings: ratingReducer,
});
const persistedReducer = persistReducer(config, reducer);

const store = configureStore({
  reducer: persistedReducer,
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
