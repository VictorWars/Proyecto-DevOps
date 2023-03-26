const Salon = require('../models/salon');

const getAll = async (req, res) => {
    const salones = await Salon.findAll();
    return res.status(200).json(salones);
};

const create = (req, res) => {
    
};

module.exports = {
    getAll,
    create
};