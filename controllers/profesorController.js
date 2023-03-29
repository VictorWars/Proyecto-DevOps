const Profesor = require('../models/profesor');

const getAll = async (req, res) => {
  const profesores = await Profesor.findAll();
  return res.status(200).json(profesores);
};

const update = async (req, res, next) => {
  const body = req.body;
  const { id } = req.params;

  const profesor = await Profesor.findByPk(id);
  if (!profesor) return res.status(404).json({ message: 'Not Found Model' });

  profesor.update(body);

  if (profesor.changed) return res.status(200).json(profesor);

  return res.status(500).json({ message: 'Internal Server Error' });
};

const create = async (req, res) => {
  const body = req.body;
  const profesor = await Profesor.create(body);
  return res.status(201).json(profesor);
};

module.exports = {
  getAll,
  update,
  create,
};
