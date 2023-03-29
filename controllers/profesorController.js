const Profesor = require('../models/profesor');

const getAll = async (req, res) => {
  const profesores = await Profesor.findAll();
  return res.status(200).json(profesores);
};

const create = async (req, res) => {
  const body = req.body;
  const profesor = await Profesor.create(body);
  return res.status(201).json(profesor);
};

module.exports = {
  getAll,
  create,
};
