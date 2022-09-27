import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className="content-home">
        <div className="intro">
          <h3>Bienvenido a WeCareYou.com</h3>
          <h3>
            Una pagina web para reservar turnos para ser atendido en nuestro
            hospital
          </h3>
        </div>
        <div className="instruc-reservar">
          <h3>Para reservar un turno:</h3>
          <ol>
            <li>
              <h3>Haga click en el botón "Obtener un turno"</h3>
            </li>
            <li>
              <h3>
                Rellene el formulario de paciente si es su primera vez
                solicitando un turno
              </h3>
            </li>
            <li>
              <h3>
                Si ya ha solicitado un turno con anterioridad o si ya lleno el
                anterior formulario, rellene el formulario de turno y complete
                con la informacion requerida
              </h3>
            </li>
          </ol>
        </div>
        <div className="instruc-reservar">
          <h3>Para modificar un turno:</h3>
          <ol>
            <li>
              <h3>Haga click en el botón "Mis turnos"</h3>
            </li>
            <li>
              <h3>Coloque su DNI y haga click en "Consultar"</h3>
            </li>
            <li>
              <h3>
                En el recuadro con el turno que desea modificar, haga click en
                "Editar"
              </h3>
            </li>
            <li>
              <h3>
                Luego de que haya realizado los cambios, haga click en "Hecho"
              </h3>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
