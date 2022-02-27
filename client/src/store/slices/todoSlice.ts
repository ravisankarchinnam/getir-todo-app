import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {message} from "antd";
import {RootState} from "store";
import {ITodo} from "store/models";

export interface TodoState {
  loading: boolean;
  error: string;
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // fetch todos reducers
    fetchTodosRequested(state) {
      state.loading = true;
      state.error = "";
    },
    fetchTodosSuccess(state, action: PayloadAction<ITodo[]>) {
      state.loading = false;
      state.error = "";
      state.todos = action.payload;
    },
    fetchTodosFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      message.error(action.payload);
    },

    // add todo reducers
    addTodoRequested(state, action: PayloadAction<ITodo>) {
      state.loading = true;
      state.error = "";
    },
    addTodoSuccess(state, action: PayloadAction<ITodo>) {
      state.loading = false;
      state.error = "";
      state.todos = [...state.todos, action.payload];
      message.success("Todo added!");
    },
    addTodoFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      message.error(action.payload);
    },

    // update todo reducers
    updateTodoRequested(state, action: PayloadAction<ITodo>) {
      state.loading = true;
      state.error = "";
    },
    updateTodoSuccess(state, action: PayloadAction<ITodo>) {
      state.loading = false;
      state.error = "";
      state.todos = state?.todos?.map((todo: ITodo) => (action.payload?._id === todo?._id ? action.payload : todo));
      message.info("Todo state updated!");
    },
    updateTodoFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      message.error(action.payload);
    },

    // delete todo reducers
    deleteTodoRequested(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = "";
    },
    deleteTodoSuccess(state, action: PayloadAction<ITodo>) {
      state.loading = false;
      state.error = "";
      state.todos = state?.todos?.filter(({_id}: ITodo) => action.payload?._id !== _id);
      message.warning("Todo removed!");
    },
    deleteTodoFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      message.error(action.payload);
    },
  },
});

// Actions
export const {
  fetchTodosRequested,
  fetchTodosSuccess,
  fetchTodosFailed,
  addTodoRequested,
  addTodoSuccess,
  addTodoFailed,
  updateTodoRequested,
  updateTodoSuccess,
  updateTodoFailed,
  deleteTodoRequested,
  deleteTodoSuccess,
  deleteTodoFailed,
} = todoSlice.actions;

// Selectors
export const selectTodosLoading = (state: RootState) => state.todo.loading;
export const selectTodos = (state: RootState) => state.todo.todos;

// Reducer
export const todoReducer = todoSlice.reducer;
export default todoReducer;
