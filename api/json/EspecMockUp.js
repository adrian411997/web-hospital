const { Espec } = require("../src/db");
const PacientesMockUp = async () => {
  try {
    await Espec.create({
      name: "Neumonologia",
    });
    await Espec.create({
      name: "Psicologia",
    });
    await Espec.create({
      name: "Traumatologia",
    });
    await Espec.create({
      name: "Fisioterapia",
    });
    await Espec.create({
      name: "Neurologia",
    });
    await Espec.create({
      name: "Nutricion",
    });
    await Espec.create({
      name: "Nefrologia",
    });
    await Espec.create({
      name: "Gastroenterologia",
    });
    await Espec.create({
      name: "Otorrinolaringologia",
    });
    await Espec.create({
      name: "Ginecología",
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = PacientesMockUp;
