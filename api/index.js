const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const DoctoresMockUp = require("./json/DoctoresMocjUp");
const turnosMockUp = require("./json/TurnosMockup");
const PacientesMockUp = require("./json/PacientesMockup");
const EspecMockUp = require("./json/EspecMockUp");

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3004, async () => {
    await EspecMockUp();
    await DoctoresMockUp();
    await PacientesMockUp();
    await turnosMockUp();
    console.log("Servidor iniciado");
  });
});
