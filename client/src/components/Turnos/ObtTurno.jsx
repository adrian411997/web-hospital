import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { postPacientes, postTurno } from "../../Redux/reducers/allTurnos";
import { getAllEspec, allEspec } from "../../Redux/reducers/allEspec";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorsBySpec, allDoctors } from "../../Redux/reducers/allDoctors";
import Swal from "sweetalert2";
import "./ObtTurno.css";
import newUsuario from "../images/agregar-usuario.png";
import newTurno from "../images/nuevoTurno.png";
import Footer from "../Footer/Footer";

const ObtTurno = () => {
  const date = new Date();
  let Month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const today = `${date.getFullYear()}-${Month}-${date.getDate()}`;
  console.log(today);
  const dispatch = useDispatch();
  const [formPacient, setFormPacient] = useState({});
  const [error, setError] = useState({});
  const [formTurno, setFormTurno] = useState({});
  let especs = useSelector(allEspec);
  let docs = useSelector(allDoctors);
  console.log(docs);
  const onChange = (e) => {
    setFormPacient({ ...formPacient, [e.target.name]: e.target.value });
  };
  const onChangeTurno = (e) => {
    setFormTurno({ ...formTurno, [e.target.name]: e.target.value });
    if (e.target.name === "time") {
      let time = e.target.value.split(":");
      console.log(parseInt(time[0]));
      if (parseInt(time[0]) < 8 || time[0] > 17) {
        console.log("fuera de horario");
        setError({ ...setError, [e.target.name]: "Solo horarios de 8 a 16hs" });
      } else {
        setError({});
      }
    }
  };
  const post = () => {
    dispatch(postPacientes(formPacient));
    Swal.fire({
      icon: "success",
      text: "Paciente creado satisfactoriamente",
    }).then((result) => {
      window.location.reload(false);
    });
  };
  const onChangeSelect = (e) => {
    dispatch(getDoctorsBySpec(e.target.value));
  };
  useEffect(() => {
    dispatch(getAllEspec());
  }, [dispatch]);

  const createATurno = () => {
    dispatch(postTurno(formTurno));
    Swal.fire({
      icon: "success",
      text: "Turno creado satisfactoriamente",
    }).then((result) => {
      window.location.reload(false);
    });
  };
  console.log(error);
  console.log(formTurno);
  console.log(Object.entries(formPacient).length === 0);
  return (
    <>
      <Header />
      <div className="content">
        <div className="formInputPaciente">
          <h1>Si se nuevo complete este formulario</h1>
          <div className="form-content">
            <img src={newUsuario} alt="NuevoUsuario" width={200} height={200} />
            <div>
              <label>DNI</label>
              <input type={"number"} name="dni" onChange={onChange} />
            </div>
            <div>
              <label>Nombre</label>
              <input type={"text"} name="name" onChange={onChange} />
            </div>
            <div className="genero">
              <label>Genero</label>
              <select name="genero" onChange={onChange} className="select">
                <option value={""}>Genero</option>
                <option>Hombre</option>
                <option>Mujer</option>
              </select>
            </div>
            <div>
              <label>Edad</label>
              <input type={"number"} name="age" onChange={onChange} />
            </div>
            <button
              onClick={post}
              disabled={Object.entries(formPacient).length !== 4}
              className="btn-form"
            >
              Crear
            </button>
          </div>
        </div>
        <div className="formTurno">
          <h1>
            Complete este formulario si ya ha pedido un turno o se registrado
          </h1>
          <div className="form-content">
            <img src={newTurno} alt="NuevoUsuario" width={200} height={200} />
            <div>
              <label>DNI: </label>
              <input onChange={onChangeTurno} type={"number"} name="dni" />{" "}
            </div>
            <div>
              <label>Area: </label>
              <select onChange={(e) => onChangeSelect(e)}>
                <option value={""} defaultValue>
                  Elija una area
                </option>
                {especs.length > 0
                  ? especs.map((esp, index) => (
                      <option key={index} value={esp.name}>
                        {esp.name}
                      </option>
                    ))
                  : ""}
              </select>

              <select name="docName" onChange={onChangeTurno}>
                <option value="">Elija un doctor</option>
                {docs.length > 0
                  ? docs.map((doc, index) => (
                      <option key={index} value={doc.name}>
                        {doc.name}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
            <div>
              <label>Fecha</label>
              <input
                onChange={onChangeTurno}
                name="date"
                type="date"
                min={today}
              />
              <label>Hora</label>
              <input
                onChange={onChangeTurno}
                name="time"
                type="time"
                min="08:00"
                max="16:00"
              />{" "}
              <span>{error.time ? error.time : ""}</span>
            </div>
            <button
              onClick={createATurno}
              className="btn-form"
              disabled={
                Object.entries(formTurno).length !== 4 ||
                Object.entries(error).length > 0
              }
            >
              Crear Turno
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ObtTurno;
