const Profesor = require('../models/profesor');

const getAll = async (req, res) => {
    const profesores = await Profesor.findAll();
    return res.status(200).json(profesores);    
}



module.exports = {
    getAll
}

