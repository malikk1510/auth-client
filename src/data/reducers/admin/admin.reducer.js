import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  adminLoginApi,
  adminSignupApi,
} from "../../services/admin/admin.service";

//async thunk
//
export const adminLoginItem = createAsyncThunk(
  "/adminLoginItem",
  async (payload, thunkAPI) => {
    let response = await adminLoginApi(payload);
    console.log("response: ", response);
    if (response.isSuccessfull) {
      return response;
    }
    return  thunkAPI.rejectWithValue(response);
  }
);
export const adminSignupItem = createAsyncThunk(
  "/adminSignupItem",
  async (payload, thunkAPI) => {
    let response = await adminSignupApi(payload);
    console.log("response: ", response);
    if (response.isSuccessfull) {
      return response;
    }
    return thunkAPI.rejectWithValue(response);
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoggedIn: false,
    adminData: null,
    token: null,
  },
  reducers: {
    logout: (state, action) => {
      state.adminData = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [adminLoginItem.fulfilled]: (state, action) => {
      // console.log('action.payload: ', action.payload);
      state.adminData = action.payload.data.admin;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
    [adminSignupItem.fulfilled]: (state, action) => {
      // console.log('action.payload: ', action.payload);
      state.adminData = action.payload.data.admin;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
  },
});
export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
