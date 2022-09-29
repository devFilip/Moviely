import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { setComments } from "../../redux/toolkit/commentsSlice";
import { Action } from "../../redux/toolkit/configureStore";
import { requestAddComment, requestGetComments } from "../requests/comments";

export function* handleAddComment(action: Action) {
  const { payload } = action;
  try {
    yield call(requestAddComment, payload);
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetComments(action: Action) {
  const { payload } = action;
  try {
    const response: AxiosResponse = yield call(requestGetComments, payload);
    yield put(setComments([...response?.data]));
  } catch (error) {
    console.log(error);
  }
}
