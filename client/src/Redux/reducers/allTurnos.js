import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTurnos = createAsyncThunk(
  "Turnos/getAllTurnos",
  async (payload) => {
    console.log(payload);
    const response = await axios
      .get(`http://localhost:3004/api/turnos?pacienteId=${payload}`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

export const updateTurno = createAsyncThunk(
  "turno/updateTurno",
  async (payload) => {
    console.log(payload);
    const response = await axios
      .put("http://localhost:3004/api/turnos/update", payload)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);
export const postTurno = createAsyncThunk(
  "turno/postTurno",
  async (payload) => {
    const response = await axios
      .post("http://localhost:3004/api/turnos/crear", payload)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);
export const deleteTurno = createAsyncThunk(
  "turno/deleteTurno",
  async (payload) => {
    const response = await axios
      .delete("http://localhost:3004/api/turnos/delete", { data: payload })
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);
export const postPacientes = createAsyncThunk(
  "Turnos/paciente",
  async (payload) => {
    const response = await axios
      .post("http://localhost:3004/api/pacientes", payload)
      .catch((error) => {
        console.log(error);
      });
    return response.data;
  }
);
const initialState = {
  turnos: [],
};

const turnoSlice = createSlice({
  name: "turnos",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTurnos.pending]: () => {
      console.log("Trayendo los turnos");
    },
    [getAllTurnos.fulfilled]: (state, action) => {
      return { turnos: action.payload };
    },
    [postPacientes.fulfilled]: (state, action) => {
      console.log("posted");
    },
    [postTurno.fulfilled]: (state, action) => {
      console.log("posted");
    },
    [updateTurno.fulfilled]: (state, action) => {
      console.log("update");
    },
  },
});

export default turnoSlice.reducer;

export const allTurnos = (state) => state.turnos.turnos;
