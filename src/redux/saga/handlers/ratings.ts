import { call } from "redux-saga/effects";
import { Action } from "../../redux/toolkit/configureStore";
import { requestAddRating } from "../requests/ratings";

export function* handleAddRating(action: Action) {
  const { payload } = action;
  try {
    yield call(requestAddRating, payload);
  } catch (error) {
    console.log(error);
  }
}
