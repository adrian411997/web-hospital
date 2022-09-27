import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="content-header">
        <div className="contet-buttons-and-title">
          <div className="title">
            <Link to="/">
              <h2>We Care You</h2>
            </Link>
          </div>
          <div className="content-buttons">
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
              <img
                src="data:image/png;base64,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"
                width="30"
                height="20"
                alt="xd"
              />
            </label>

            <div className="buttons-header">
              <Link to="/crear">
                <button className="btn">Obtener un turno</button>
              </Link>
              <Link to="/turnos">
                <button className="btn">Mis turnos</button>
              </Link>
              <Link to="/doctores">
                <button className="btn">Doctores</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="frase">
          <h1>Trabajamos por que sabemos cuan importante es tu vida </h1>
          <h1>Trabajamos por tu salud y la de tu familia</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
