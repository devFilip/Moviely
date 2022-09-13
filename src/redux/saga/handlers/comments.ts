import { call } from "redux-saga/effects";
import { Action } from "../../redux/toolkit/configureStore";
import { requestAddComment } from "../requests/comments";

export function* handleAddComment(action: Action) {
  const { payload } = action;
  try {
    yield call(requestAddComment, payload);
  } catch (error) {
    console.log(error);
  }
}
