const { logger } = require('../util/logger');
const Salon = require('../models/salon');

const fileName = 'salonesController';
const logCallMethod = (name, params) => {
  logger.debug(`${fileName} execute '${name}' with params: ${params}`);
};

const getAll = async (req, res, next) => {
  try {
    logCallMethod('getAll', ['req', 'res']);
    const salones = await Salon.findAll();
    return res.status(200).json(salones);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    logCallMethod('getById', ['req', 'res']);
    const { id } = req.params;
    const SalonEncontrado = await Salon.findByPk(parseInt(id));
    if (!SalonEncontrado) {
      logger.warning('Salon no existe');
      return res.status(404).json({ message: 'Salon no existe' });
    }

    return res.status(200).json(SalonEncontrado);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    logCallMethod('create', ['req', 'res']);
    const { nombre, tipo, capacidad, estado, comodidades } = req.body;

    const salon = await Salon.create({
      nombre,
      tipo,
      capacidad,
      estado,
      comodidades,
    });
    return res.status(201).json(salon);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    logCallMethod('destroy', ['req', 'res']);
    const { id } = req.params;
    const salon = await Salon.findByPk(id);
    if (!salon) {
      logger.warning('salon does not exist');
      return res.json(404).json({ message: 'salon does not exist' });
    }
    await Salon.destroy({ where: { id } });
    return res.json(200);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    logCallMethod('update ', ['req', 'res']);
    const { id } = req.params;
    const { nombre, tipo, capacidad, estado, comodidades } = req.body;
    const salon = await Salon.findByPk(id);
    console.log(salon);
    if (!salon) {
      logger.warning('salon does not exist');
      return res.status(404).json({ message: 'Salon was not found' });
    }
    await Salon.update(
      { nombre, tipo, capacidad, estado, comodidades },
      { where: { id } }
    );
    return res.json(200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  create,
  destroy,
  update,
  getById,
};
