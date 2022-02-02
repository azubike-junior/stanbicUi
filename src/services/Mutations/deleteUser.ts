import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { getUsers } from "./getUsers";

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: [];
  isSuccessful: boolean;
}

interface data {
  id: string;
  dispatch: any;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: [],
  isSuccessful: false,
};

export const deleteUser = createAsyncThunk(
  "delete",
  async ({ id, dispatch }: data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://crud-v1.herokuapp.com/users/${id}`
      );
      if (response.status === 200) {
        dispatch(getUsers());
        return response.data.users;
      }
    } catch (e: any) {
      console.log(">>>", e.response.data);
      return rejectWithValue(e.response.data);
    }
  }
);

export const deleteUserSlice = createSlice({
  name: "create",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default deleteUserSlice.reducer;
