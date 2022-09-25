import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
  loading: false,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://randomuser.me/api/?gender=male&results=3",
      headers: {
        ContentType: "application/json",
      },
    });
    return response.data.results;
  } catch (error) {
    return error;
  }
});

export const usersSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.value = action.payload;
    },
    [getUsers.rejected]: (state, action) => [(state.loading = "failed")],
  },
});

export default usersSlice.reducer;
