import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { setComments } from "../../redux/toolkit/commentsSlice";
import { Action } from "../../redux/toolkit/configureStore";
import {
  requestAddComment,
  requestApproveComment,
  requestDenyComment,
  requestGetComments,
} from "../requests/comments";

export function* handleAddComment(action: Action) {
  const { payload } = action;
  try {
    yield call(requestAddComment, payload);
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetComments() {
  try {
    const response: AxiosResponse = yield call(requestGetComments);
    yield put(setComments([...response?.data]));
  } catch (error) {
    console.log(error);
  }
}
export function* handleApproveComment(action: Action) {
  const { payload } = action;
  try {
    yield call(requestApproveComment, payload);
  } catch (error) {
    console.log(error);
  }
}
export function* handleDenyComment(action: Action) {
  const { payload } = action;
  try {
    yield call(requestDenyComment, payload);
  } catch (error) {
    console.log(error);
  }
}
