import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import createUserReducer from "../services/Mutations/createUser";
import getUsersReducer from "./../services/Mutations/getUsers";
import deleteUsersReducer from "./../services/Mutations/deleteUser";

export const store = configureStore({
  reducer: {
    createUserReducer,
    getUsersReducer,
    deleteUsersReducer,
  },
  // middleware: (gdm) => gdm().concat(openAccountApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
