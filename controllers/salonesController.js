const Salon = require('../models/salon');

const getAll = async (req, res) => {
    const salones = await Salon.findAll();
    return res.status(200).json(salones);
};

const getById = async(req, res) => {
  const { id } = req.params;
  const SalonEncontrado = await Salon.findByPk(parseInt(id))
  if (!SalonEncontrado) {
    return res.status(404).json({ message: "Salon no existe" });
  }

  return res.status(200).json(SalonEncontrado);
}

const create= async (req, res) =>{
    const { nombre, tipo, capacidad, estado, comodidades } = req.body;

    const salon = await Salon.create({
      nombre, tipo, capacidad, estado, comodidades
    });
    return res.status(201).json(salon);
};

const destroy = async (req, res) => {
    const { id } = req.params;
    const salon = await Salon.findByPk(id);
    if (!salon) {
      return res.json(404).json({ message: 'salon does not exist' });
    }
    await Salon.destroy({ where: { id } });
    return res.json(200)
};

const update = async(req, res) => {
    const { id } = req.params;
    const { nombre, tipo, capacidad, estado, comodidades } = req.body;
    const salon = await Salon.findByPk(id);
    console.log(salon);
    if (!salon) {
      return res.status(404).json({ message: 'Salon was not found' });
    }
    await Salon.update({ nombre, tipo, capacidad, estado, comodidades }, { where: { id } });
    return res.json(200)
};



module.exports = {
    getAll,
    create,
    destroy,
    update,
    getById
};