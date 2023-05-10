const { logger } = require('../util/logger');
const Profesor = require('../models/profesor');

const fileName = 'profesorController';
const logCallMethod = (name, params) => {
  logger.debug(`${fileName} execute '${name}' with params: ${params}`);
};

const getAll = async (req, res, next) => {
  try {
    logCallMethod('getAll', ['req', 'res']);
    const profesores = await Profesor.findAll();
    return res.status(200).json(profesores);
  } catch (err) {
    return next(err);
  }
};

const update = async (req, res, next) => {
  try {
    logCallMethod('getById', ['req', 'res']);

    const body = req.body;
    const { id } = req.params;

    const profesor = await Profesor.findByPk(id);
    if (!profesor) {
      logger.warning('Profesor not Found Model');
      return res.status(404).json({ message: 'Profesor not Found Model' });
    }

    profesor.update(body);

    if (profesor.changed) return res.status(200).json(profesor);

    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    logCallMethod('create', ['req', 'res']);
    const body = req.body;
    const profesor = await Profesor.create(body);

    return res.status(201).json(profesor);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    logCallMethod('destroy', ['req', 'res']);

    const { id } = req.params;
    const profesor = await Profesor.findByPk(id);
    if (!profesor) {
      logger.warning('Profesor not Found Model');
      return res.status(404).json({ message: 'Profesor not Found Model' });
    }

    return res.status(200).json(profesor);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    logCallMethod('update ', ['req', 'res']);

    const { id } = req.params;
    let profesor = await Profesor.findByPk(id);
    if (!profesor) {
      logger.warning('Profesor not Found Model');
      return res.status(404).json({ message: 'Profesor not Found Model' });
    }

    profesor = await profesor.destroy();
    return res.status(200).json(profesor);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  update,
  create,
  getById,
  destroy,
};
