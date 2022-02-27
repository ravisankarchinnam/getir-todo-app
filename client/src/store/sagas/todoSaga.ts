import {call, put, takeLatest} from "redux-saga/effects";
import {ITodo} from "../models";
import todoApi from "../api/todoApi";
import {
  fetchTodosRequested,
  fetchTodosSuccess,
  fetchTodosFailed,
  addTodoRequested,
  updateTodoRequested,
  deleteTodoRequested,
  addTodoSuccess,
  addTodoFailed,
  updateTodoSuccess,
  updateTodoFailed,
  deleteTodoSuccess,
  deleteTodoFailed,
} from "../slices/todoSlice";
import {PayloadAction} from "@reduxjs/toolkit";

function* fetchTodos() {
  try {
    const response: ITodo[] = yield call(todoApi.getAll);
    yield put(fetchTodosSuccess(response));
  } catch (error: any) {
    console.log(`Failed to fetch todos`, error);
    yield put(fetchTodosFailed(error));
  }
}

function* addTodo(action: PayloadAction<ITodo>) {
  try {
    const response: ITodo = yield call(todoApi.add, action?.payload);
    yield put(addTodoSuccess(response));
  } catch (error: any) {
    console.log(`Failed to add todo`, error);
    yield put(addTodoFailed(error));
  }
}

function* updateTodo(action: PayloadAction<ITodo>) {
  try {
    const response: ITodo = yield call(todoApi.update, action?.payload);
    yield put(updateTodoSuccess(response));
  } catch (error: any) {
    console.log(`Failed to update todo`, error);
    yield put(updateTodoFailed(error));
  }
}

function* deleteTodo(action: PayloadAction<string>) {
  try {
    const response: ITodo = yield call(todoApi.delete, action?.payload);
    yield put(deleteTodoSuccess(response));
  } catch (error: any) {
    console.log(`Failed to delete todo`, error);
    yield put(deleteTodoFailed(error));
  }
}

export default function* todoSaga() {
  yield takeLatest(fetchTodosRequested, fetchTodos);
  yield takeLatest(addTodoRequested, addTodo);
  yield takeLatest(updateTodoRequested, updateTodo);
  yield takeLatest(deleteTodoRequested, deleteTodo);
}
