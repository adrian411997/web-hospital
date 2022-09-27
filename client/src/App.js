import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Turnos from "./components/Turnos/Turnos";
import ObtTurno from "./components/Turnos/ObtTurno";
import Doctor from "./components/Doctores/Doctor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/turnos" element={<Turnos />}></Route>
        <Route path="/crear" element={<ObtTurno />}></Route>
        <Route path="/doctores" element={<Doctor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
