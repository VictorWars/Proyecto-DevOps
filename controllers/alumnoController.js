const Alumno = require('../models/alumno');

const getAll = async (req, res) => {
    const alumnos = await Alumno.findAll();
    return res.status(200).json(alumnos);    
}



module.exports = {
    getAll
}