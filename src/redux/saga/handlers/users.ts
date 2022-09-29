import { requestGetUser, requestGetUsers } from "../requests/users";
import { setUser, setUsers } from "../../redux/toolkit/userSlice";
import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { Action } from "../../redux/toolkit/configureStore";

export function* handleGetUsers() {
  try {
    const response: AxiosResponse = yield call(requestGetUsers);
    yield put(setUsers(response?.data));
  } catch (error) {
    alert(error);
  }
}
export function* handleGetUser(action: Action) {
  const { payload } = action;
  try {
    const response: AxiosResponse = yield call(requestGetUser, payload);
    yield put(setUser(response?.data));
  } catch (error) {
    alert(error);
  }
}
