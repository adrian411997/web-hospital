import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllEspec = createAsyncThunk("espec/getAllEspec", async () => {
  console.log();
  const response = await axios
    .get("http://localhost:3004/api/espec")
    .catch((err) => {
      console.log(err);
    });
  return response.data;
});

const initialState = {
  espec: [],
};

const especSlice = createSlice({
  name: "espec",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllEspec.pending]: () => {
      console.log("Trayendo los turnos");
    },
    [getAllEspec.fulfilled]: (state, action) => {
      return { espec: action.payload };
    },
  },
});

export default especSlice.reducer;

export const allEspec = (state) => state.espec.espec;
