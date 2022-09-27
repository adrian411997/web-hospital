import React, { useEffect } from "react";
import CardDoctor from "./CardDoctor";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctores, allDoctors } from "../../Redux/reducers/allDoctors";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Doctor = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(allDoctors);
  useEffect(() => {
    dispatch(getAllDoctores());
  }, [dispatch]);
  console.log(doctors);
  return (
    <>
      <Header />
      <div className="title-center-doctor">
        <h3>Nuestra lista de doctores</h3>
      </div>
      <div className="turnos-content">
        {doctors.length > 0
          ? doctors.map((doc, index) => (
              <CardDoctor
                name={doc.name}
                espec={doc.espec.name}
                gen={doc.genero}
              />
            ))
          : ""}
      </div>
      <Footer />
    </>
  );
};

export default Doctor;
