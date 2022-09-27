const { Doctores } = require("../src/db");
const DoctoresMockUp = async () => {
  try {
    await Doctores.create({
      name: "Hernan Cortes",
      age: 30,
      genero: "Masculino",
      especId: 1,
    });
    await Doctores.create({
      name: "George Mandol",
      age: 40,
      genero: "Masculino",
      especId: 2,
    });
    await Doctores.create({
      name: "Enrique Kron",
      age: 30,
      genero: "Masculino",
      especId: 8,
    });
    await Doctores.create({
      name: "Joseph Mind",
      age: 40,
      genero: "Masculino",
      especId: 2,
    });
    await Doctores.create({
      name: "Esteban Sweet",
      age: 30,
      genero: "Masculino",
      especId: 4,
    });
    await Doctores.create({
      name: "Joaquin Uri",
      age: 40,
      genero: "Masculino",
      especId: 7,
    });
    await Doctores.create({
      name: "Luisa Defter",
      age: 30,
      genero: "Femenino",
      especId: 3,
    });
    await Doctores.create({
      name: "Jacqueline Corbalan",
      age: 40,
      genero: "Femenino",
      especId: 3,
    });
    await Doctores.create({
      name: "Agustina Fernandez",
      age: 30,
      genero: "Femenino",
      especId: 4,
    });
    await Doctores.create({
      name: "Laura Torres",
      age: 40,
      genero: "Femenino",
      especId: 8,
    });
    await Doctores.create({
      name: "Julieta Vasquez",
      age: 30,
      genero: "Femenino",
      especId: 7,
    });
    await Doctores.create({
      name: "Julia Lopez",
      age: 40,
      genero: "Masculino",
      especId: 10,
    });
    await Doctores.create({
      name: "Martin Echeverria",
      age: 30,
      genero: "Masculino",
      especId: 1,
    });
    await Doctores.create({
      name: "Cornelio Sandoval",
      age: 40,
      genero: "Masculino",
      especId: 5,
    });
    await Doctores.create({
      name: "Inoto Yamashida",
      age: 30,
      genero: "Masculino",
      especId: 8,
    });
    await Doctores.create({
      name: "Jacob Bustamante",
      age: 40,
      genero: "Masculino",
      especId: 2,
    });
    await Doctores.create({
      name: "Carmen Bustamante",
      age: 30,
      genero: "Femenino",
      especId: 4,
    });
    await Doctores.create({
      name: "Dionisio Yonar",
      age: 40,
      genero: "Masculino",
      especId: 7,
    });
    await Doctores.create({
      name: "Inocencio Cepeda",
      age: 30,
      genero: "Masculino",
      especId: 3,
    });
    await Doctores.create({
      name: "Justo Ramirez",
      age: 40,
      genero: "Masculino",
      especId: 9,
    });
    await Doctores.create({
      name: "Susana Archival",
      age: 30,
      genero: "Femenino",
      especId: 10,
    });
    await Doctores.create({
      name: "Diana Gomez",
      age: 40,
      genero: "Femenino",
      especId: 8,
    });
    await Doctores.create({
      name: "Leticia Cerviche",
      age: 30,
      genero: "Femenino",
      especId: 7,
    });
    await Doctores.create({
      name: "Arlene Mejara",
      age: 40,
      genero: "Femenino",
      especId: 10,
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = DoctoresMockUp;
