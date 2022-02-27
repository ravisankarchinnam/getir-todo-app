import {configureStore, ThunkAction, Action, combineReducers} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {todoReducer} from "store/slices";
import rootSaga from "store/sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
