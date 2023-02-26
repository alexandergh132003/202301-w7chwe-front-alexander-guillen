import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../types";

const userInitialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
    logOutUser: () => ({
      ...userInitialState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logOutUser: logOutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
