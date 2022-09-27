import React, { useState } from "react";
import { updateTurno, deleteTurno } from "../../Redux/reducers/allTurnos";
import "./CardTurno.css";
import Swal from "sweetalert2";

const CardTurno = ({ name, dni, hora, fecha, doctor, dispatch, id }) => {
  const [deleteForm, setDeleteForm] = useState({ id: id });
  const [formupdateTurno, setFormUpdateTurno] = useState({ id: id });
  const [editable, setEditable] = useState(false);
  const onChangeUnedit = () => {
    dispatch(updateTurno(formupdateTurno));
    Swal.fire({ icon: "success", text: "Turno actulizado" }).then((result) => {
      setEditable(false);
      setFormUpdateTurno({ id: id });
    });
  };
  const deletethis = () => {
    Swal.fire({
      title: "¿En realidad quieres eliminar este turno?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTurno(deleteForm)).then((result) => {
          Swal.fire({
            icon: "success",
            text: "Turno borrado exitosamente",
          }).then((result) => {
            window.location.reload(false);
          });
        });
      } else if (result.isDenied) {
        Swal.fire("Turno no borrado", "", "info");
      }
    });
  };

  const cancelEdit = () => {
    setEditable(false);
  };
  const onChangeEditar = () => {
    setEditable(true);
  };
  const onChange = (e) => {
    setFormUpdateTurno({ ...formupdateTurno, [e.target.name]: e.target.value });
  };
  const date = new Date();
  let Month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const today = `${date.getFullYear()}-${Month}-${date.getDate()}`;
  return (
    <div className="card">
      <div className="nombre">
        <h4>Nombre: {name}</h4>
      </div>
      <div className="dni">
        <h4>DNI: {dni}</h4>
      </div>
      <div className="dni">
        <h4>Doctor: {doctor}</h4>
      </div>
      <div className="dni">
        {editable ? (
          <>
            <h4>Fecha</h4>{" "}
            <input onChange={onChange} name="date" type="date" min={today} />
          </>
        ) : (
          <h4>Fecha: {fecha}</h4>
        )}
      </div>
      <div className="dni">
        {editable ? (
          <>
            <h4>Hora</h4>
            <input
              onChange={onChange}
              name="time"
              type="time"
              min="08:00"
              max="16:00"
            />
          </>
        ) : (
          <h4>Hora: {hora}</h4>
        )}
      </div>
      <div className="card-buttons">
        {editable ? (
          <button className="btn-form" onClick={onChangeUnedit}>
            Hecho
          </button>
        ) : (
          <button
            disabled={editable}
            className="btn-edit"
            onClick={onChangeEditar}
          >
            Editar
          </button>
        )}
        {editable ? (
          <button className="btn-delete " onClick={cancelEdit}>
            Cancelar
          </button>
        ) : (
          <button
            disabled={editable}
            className="btn-delete"
            onClick={deletethis}
          >
            Borrar
          </button>
        )}
      </div>
    </div>
  );
};

export default CardTurno;
