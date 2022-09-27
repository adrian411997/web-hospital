import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTurnos, allTurnos } from "../../Redux/reducers/allTurnos";
import Header from "../Header/Header";
import "./Turno.css";
import CardTurno from "./CardTurno";
import Footer from "../Footer/Footer";

const Turnos = () => {
  const dispatch = useDispatch();
  const consultar = () => {
    dispatch(getAllTurnos(document.getElementById("dni").value));
  };
  const turnos = useSelector(allTurnos);
  console.log(turnos);
  return (
    <>
      <Header />
      <div className="consulta-content">
        <h3>Ingrese su dni para ver sus turnos pedidos</h3>
        <div className="dni-field">
          <input className="input-dni" id="dni" type={"text"} />
        </div>
        <div className="btn-field">
          <button className="btn-form" onClick={consultar}>
            Consultar
          </button>
        </div>
        <div className="turnos-content">
          {turnos.length > 0 ? (
            turnos.map((turno, index) => (
              <CardTurno
                name={turno.paciente.name}
                dni={turno.paciente.dni}
                hora={turno.time}
                fecha={turno.date}
                doctor={turno.doctore.name}
                dispatch={dispatch}
                id={turno.id}
              />
            ))
          ) : (
            <h3>No tiene turnos solicitados actualmente</h3>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Turnos;
