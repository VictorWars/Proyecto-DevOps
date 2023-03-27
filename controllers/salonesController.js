const Salon = require('../models/salon');

const getAll = async (req, res) => {
    const salones = await Salon.findAll();
    return res.status(200).json(salones);
};

const getById = async (req, res) => {
  const salones = await Salon.findAll();
  return res.status(200).json(salones);
};

const create= async (req, res) =>{
    const { alumnoId, profesorId, asignaturaId, estado, capacidad } = req.body;
    const {
      user: { id },
    } = req.user;

    const comment = await Comment.create({
      userId: id,
      movieId,
      content,
      title,
    });
    return res.status(201).json(comment);
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
    const { content } = req.body;
    const salon = await Salon.findByPk(id);
    console.log(salon);
    if (!salon) {
      return res.status(404).json({ message: 'Salon was not found' });
    }
    await Salon.update({ content }, { where: { id } });
    return res.json(200)
};



module.exports = {
    getAll,
    create,
    destroy
};