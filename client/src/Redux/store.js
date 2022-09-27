import { configureStore } from "@reduxjs/toolkit";
import turnosSlice from "./reducers/allTurnos";
import especSlice from "./reducers/allEspec";
import doctorSlice from "./reducers/allDoctors";

export const store = configureStore({
  reducer: {
    turnos: turnosSlice,
    espec: especSlice,
    doctores: doctorSlice,
  },
});
