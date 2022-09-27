import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDoctorsBySpec = createAsyncThunk(
  "doctores/getDoctorsBySpec",
  async (payload) => {
    console.log(payload);
    const response = await axios
      .get(`http://localhost:3004/api/doctores/spec?spec=${payload}`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);
export const getAllDoctores = createAsyncThunk(
  "doctores/getAllDoctores",
  async (payload) => {
    console.log(payload);
    const response = await axios
      .get(`http://localhost:3004/api/doctores/`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

const initialState = {
  doctores: [],
};

const doctorSlice = createSlice({
  name: "doctores",
  initialState,
  reducers: {},
  extraReducers: {
    [getDoctorsBySpec.pending]: () => {
      console.log("Trayendo los docs");
    },
    [getDoctorsBySpec.fulfilled]: (state, action) => {
      return { doctores: action.payload };
    },
    [getAllDoctores.fulfilled]: (state, action) => {
      return { doctores: action.payload };
    },
  },
});

export default doctorSlice.reducer;

export const allDoctors = (state) => state.doctores.doctores;
