const Asignatura = require('../models/asignatura');

const getAll = async (req, res) => {
    const salones = await Salon.findAll();
    return res.status(200).json(salones);
};

const destroy = async (req, res) => {
    const { id } = req.params;
    const asignatura = await Asignatura.findByPk(id);
    if (!salon) {
      return res.json(404).json({ message: 'Asignatura does not exist' });
    }
    await Asignatura.destroy({ where: { id } });
    return res.json(200)
};

module.exports = {
    getAll,
    create,
    destroy
};