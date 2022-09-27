const { Pacientes } = require("../src/db");
const PacientesMockUp = async () => {
  try {
    await Pacientes.create({
      dni: 40764642,
      name: "Adrian Martinez",
      age: 24,
      genero: "Masculino",
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = PacientesMockUp;
