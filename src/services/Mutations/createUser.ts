import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { UserProp } from "./../../pages/Home/";
import { getUsers } from "../../services/Mutations/getUsers";

interface initState {
  error: any;
  loading: boolean;
  error2: any;
  data: UserProp;
  isSuccessful: boolean;
}

const initialState: initState = {
  error: "",
  loading: false,
  error2: "",
  data: <UserProp>{},
  isSuccessful: false,
};

export const createUser = createAsyncThunk(
  "create",
  async ({ dispatch, ...rest }: UserProp, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://crud-v1.herokuapp.com/users`,
        rest
      );
      if (response.status === 201) {
        dispatch(getUsers());
        return response.data;
      }
    } catch (e: any) {
      console.log(">>>", e.response.data);
      return rejectWithValue(e.response.data);
    }
  }
);

export const createUserSlice = createSlice({
  name: "create",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default createUserSlice.reducer;
