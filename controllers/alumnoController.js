const Alumno = require("../models/alumno");

const getAll = async (req, res) => {
  const alumnos = await Alumno.findAll();
  return res.status(200).json(alumnos);
};

const update = async (req, res, next) => {
  const body = req.body;
  const { id } = req.params;

  const alumno = await Alumno.findByPk(id);
  if (!alumno) return res.status(404).json({ message: 'Not Found Model' });

  alumno.update(body);

  if (alumno.changed) return res.status(200).json(alumno);

  return res.status(500).json({ message: 'Internal Server Error' });
};

const create = async (req, res) => {
  const body = req.body;
  const alumno = await Alumno.create(body);
  return res.status(201).json(alumno);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const alumno = await Alumno.findByPk(id);
  if (!alumno) return res.status(404).json({ message: 'Not Found Model' });

  return res.status(200).json(alumno);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  let alumno = await Alumno.findByPk(id);
  if (!alumno) return res.status(404).json({ message: 'Not Found Model' });

  alumno = await alumno.destroy();
  return res.status(200).json(alumno);
};

module.exports = {
  getAll,
  update,
  create,
  getById,
  destroy,
};
