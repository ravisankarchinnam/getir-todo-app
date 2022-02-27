import {all, fork} from "redux-saga/effects";
import todoSaga from "./todoSaga";

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
