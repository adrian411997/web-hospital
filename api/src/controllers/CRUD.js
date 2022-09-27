const { Turnos, Doctores, Espec, Pacientes } = require("../db");

//CRUD Turnos
const getAllTurnos = async (req, res, next) => {
  try {
    let { pacienteId } = req.query;
    let allData = [];
    const foundPaciente = await Pacientes.findOne({
      where: { dni: pacienteId },
    });
    const allTurnos = await Turnos.findAll({
      where: { pacienteId: foundPaciente.id },
      include: { all: true, nested: true },
    });
    allData = allTurnos;

    if (allData.length === 0) {
      return res.status(404).json({ message: "Not Found" });
    }
    return res.json(allData);
  } catch (error) {
    next(error);
  }
};
const postTurno = async (req, res, next) => {
  try {
    let { date, dni, docName, time } = req.body;

    const pacienteId = await Pacientes.findOne({ where: { dni: dni } });
    const doctorName = await Doctores.findOne({ where: { name: docName } });
    const dateVerif = await Turnos.findOne({
      where: { date: date, doctoreId: doctorName.id },
    });
    if (dateVerif === null) {
      const newTurno = await Turnos.create({
        date: date,
        pacienteId: pacienteId.id,
        doctoreId: doctorName.id,
        time: time,
      });
      return res.json({ message: "Turno creado", turno: newTurno });
    }
    return res
      .status(400)
      .json({ message: "Ya tiene un turno con el doctor en ese dia" });
  } catch (error) {
    next(error);
  }
};

const UpdateTurno = async (req, res, next) => {
  try {
    let { id, date, time } = req.body;
    const updateThisTurn = await Turnos.update(
      { date: date, time: time },
      { where: { id: id } }
    );
    return res.json({ message: "Turno Actualizado", turno: updateThisTurn });
  } catch (error) {
    next(error);
  }
};

const deleteTurno = async (req, res, next) => {
  try {
    let { id } = req.body;
    const find = await Turnos.destroy({ where: { id: id } });
    return res.status(200).json({ message: "Turno eliminado" });
  } catch (error) {
    next(error);
  }
};
//CRUD DOCTORES
const getAllDoctores = async (req, res, next) => {
  try {
    let allData = [];
    const allDoctores = await Doctores.findAll({ include: Espec });
    allData = allDoctores;
    return res.json(allData);
  } catch (error) {
    next(error);
  }
};
const getDoctorsByEspec = async (req, res, next) => {
  try {
    let { spec } = req.query;
    let allData = [];
    const specId = await Espec.findOne({ where: { name: spec } });
    if (specId === null) {
      return res.json({ message: "Not found any doctors with this area" });
    }
    const doctors = await Doctores.findAll({ where: { especId: specId.id } });
    if (doctors.length > 0) {
      allData = doctors;
      return res.json(allData);
    }
  } catch (error) {
    next(error);
  }
};
//CRUD Pacientes
const postPacientes = async (req, res, netx) => {
  let { name, age, genero, dni } = req.body;
  try {
    const verif = await Pacientes.findOne({ where: { dni: dni } });
    if (verif === null) {
      const newPaciente = await Pacientes.create({ name, age, genero, dni });
      return res
        .status(200)
        .json({ message: "Paciente creado", paciente: newPaciente });
    }
    return res.status(400).json({ message: "Ya existe este paciente" });
  } catch (error) {
    netx(error);
  }
};
//CRUD espec
const getEspec = async (req, res, next) => {
  try {
    const allEspec = await Espec.findAll();
    return res.json(allEspec);
  } catch (error) {
    netx(error);
  }
};
module.exports = {
  getAllTurnos,
  getAllDoctores,
  getDoctorsByEspec,
  postPacientes,
  postTurno,
  UpdateTurno,
  getEspec,
  deleteTurno,
};
