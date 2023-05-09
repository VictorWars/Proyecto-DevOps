const Asignatura = require('../models/asignatura');

const fileName = 'asignaturasController';

const getAll = async (req, res) => {
  // logger.debug(`${FILENAME} call methos 'getALL' with ${arguments}`)
  const asignatura = await Asignatura.findAll();
  return res.status(200).json(asignatura);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const AsignaturaEncontrada = await Asignatura.findByPk(id);
  if (!AsignaturaEncontrada) {
    //loger.warn
    return res.status(404).json({ message: 'Asignatura no existe' });
  }

  return res.status(200).json(AsignaturaEncontrada);
};

const create = async (req, res) => {
  const { nombre, descripcion, creditos, tipo, codigo } = req.body;

  const asignatura = await Asignatura.create({
    nombre,
    descripcion,
    creditos,
    tipo,
    codigo,
  });
  return res.status(201).json(asignatura);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const asignatura = await Asignatura.findByPk(id);
  if (!asignatura) {
    return res.json(404).json({ message: 'asignatura does not exist' });
  }
  await Asignatura.destroy({ where: { id } });
  return res.json(200);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, creditos, tipo, codigo } = req.body;
  const asignatura = await Asignatura.findByPk(id);

  if (!asignatura) {
    return res.status(404).json({ message: 'Asignatura was not found' });
  }
  await Asignatura.update(
    { nombre, descripcion, creditos, tipo, codigo },
    { where: { id } }
  );
  return res.json(200);
};

module.exports = {
  getAll,
  create,
  destroy,
  update,
  getById,
};
