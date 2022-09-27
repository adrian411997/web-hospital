const { Turnos } = require("../src/db");
const turnosMockUp = async () => {
  try {
    await Turnos.create({
      doctoreId: 1,
      pacienteId: 1,
      date: "2022-10-12",
      time: "16:30",
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = turnosMockUp;
