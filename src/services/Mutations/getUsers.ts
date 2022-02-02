import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { UserProp } from "./../../pages/Home/";

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  users: [];
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  users: [],
  isSuccessful: false,
};

export const getUsers = createAsyncThunk("get", async () => {
  try {
    const response = await axios.get(`https://crud-v1.herokuapp.com/users`);
    console.log(">>>>repsonse", response.data, response.data.users);

    if (response.data.status === 200) {
      return response.data.users;
    }
  } catch (e: any) {
    return e.response.data;
  }
});

export const getUsersSlice = createSlice({
  name: "get",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = true;
      state.users = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default getUsersSlice.reducer;
