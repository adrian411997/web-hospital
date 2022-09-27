require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_HOST, DB_PASSWORD } = process.env;
let sequelize = new Sequelize(
  `postgres://postgres:password@localhost/webpatients`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/Models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/Models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Turnos, Pacientes, Doctores, Espec } = sequelize.models;

Pacientes.hasMany(Turnos);
Turnos.belongsTo(Pacientes);

Doctores.hasMany(Turnos);
Turnos.belongsTo(Doctores);

Espec.hasMany(Doctores);
Doctores.belongsTo(Espec);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
  Op,
  // para importart la conexión { conn } = require('./db.js');
};
