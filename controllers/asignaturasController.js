const { logger } = require('../util/logger');
const Asignatura = require('../models/asignatura');

const fileName = 'asignaturasController';
const logCallMethod = (name, params) => {
  logger.debug(`${fileName} execute '${name}' with params: ${params}`);
};

const getAll = async (req, res, next) => {
  try {
    logCallMethod('getAll', ['req', 'res']);

    const asignatura = await Asignatura.findAll();
    return res.status(200).json(asignatura);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    logCallMethod('getById', ['req', 'res']);

    const { id } = req.params;
    const AsignaturaEncontrada = await Asignatura.findByPk(id);
    if (!AsignaturaEncontrada) {
      logger.warning('asignatura does not exist');
      return res.status(404).json({ message: 'Asignatura no existe' });
    }

    return res.status(200).json(AsignaturaEncontrada);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    logCallMethod('create', ['req', 'res']);

    const { nombre, descripcion, creditos, tipo, codigo } = req.body;

    const asignatura = await Asignatura.create({
      nombre,
      descripcion,
      creditos,
      tipo,
      codigo,
    });
    return res.status(201).json(asignatura);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    logCallMethod('destroy', ['req', 'res']);

    const { id } = req.params;
    const asignatura = await Asignatura.findByPk(id);
    if (!asignatura) {
      logger.warning('asignatura does not exist');
      return res.json(404).json({ message: 'asignatura does not exist' });
    }
    await Asignatura.destroy({ where: { id } });
    return res.json(200);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res) => {
  try {
    logCallMethod('update ', ['req', 'res']);

    const { id } = req.params;
    const { nombre, descripcion, creditos, tipo, codigo } = req.body;
    const asignatura = await Asignatura.findByPk(id);

    if (!asignatura) {
      logger.warning('asignatura does not exist');
      return res.status(404).json({ message: 'Asignatura was not found' });
    }
    await Asignatura.update(
      { nombre, descripcion, creditos, tipo, codigo },
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
