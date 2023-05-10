const { logger } = require('../util/logger');
const Alumno = require('../models/alumno');

const logCallMethod = (name, params) => {
  logger.debug(`alumnoController execute '${name}' with params: ${params}`);
};

const getAll = async (req, res, next) => {
  try {
    logCallMethod('getAll', ['req', 'res']);
    const alumnos = await Alumno.findAll();
    return res.status(200).json(alumnos);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    logCallMethod('update', ['req', 'res']);

    const body = req.body;
    const { id } = req.params;

    const alumno = await Alumno.findByPk(id);
    if (!alumno) {
      logger.warning('Alumno not found model');
      return res.status(404).json({ message: 'Alumno not found model' });
    }

    alumno.update(body);

    if (alumno.changed) return res.status(200).json(alumno);

    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    logCallMethod('create', ['req', 'res']);

    const body = req.body;
    const alumno = await Alumno.create(body);
    return res.status(201).json(alumno);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    logCallMethod('getById', ['req', 'res']);

    const { id } = req.params;

    const alumno = await Alumno.findByPk(id);
    if (!alumno) {
      logger.warning('Alumno not found model');
      return res.status(404).json({ message: 'Alumno not found model' });
    }

    return res.status(200).json(alumno);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    logCallMethod('destroy', ['req', 'res']);

    const { id } = req.params;
    let alumno = await Alumno.findByPk(id);
    if (!alumno) {
      logger.warning('Alumno not found model');
      return res.status(404).json({ message: 'Alumno not found model' });
    }

    alumno = await alumno.destroy();
    return res.status(200).json(alumno);
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
