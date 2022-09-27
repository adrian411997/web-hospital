import React from "react";
import image from "../images/doctor.png";
import image2 from "../images/doctora.png";
import "./CardDoctor.css";

const CardDoctor = ({ name, espec, gen }) => {
  return (
    <div className="content-doctor-cards">
      <div className="card">
        <div className="image-card">
          {gen === "Masculino" ? (
            <img src={image} alt="doctor" width={200} height={200} />
          ) : (
            <img src={image2} alt="doctor" width={200} height={200} />
          )}
        </div>
        <h4>Nombre: {name}</h4>
        <h4>Area: {espec}</h4>
      </div>
    </div>
  );
};

export default CardDoctor;
