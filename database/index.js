const sequelize = require('sequelize');
const config = require('../config/database');

const Salon = require('../models/salon');
const Asignatura = require('../models/asignatura');
const Usuario = require('../models/usuario');
const Alumno = require('../models/alumno');
const Profesor = require('../models/profesor');
/**
 * Represent database connection
 * @file
 * @author
 */
let connection = {};

if (process.env.NODE_ENV === 'development') {
  connection = new sequelize(config['development']);
} else {
  connection = new sequelize(config['test']);
}

Usuario.init(connection);
Salon.init(connection);
Asignatura.init(connection);
Alumno.init(connection);
Profesor.init(connection);

Salon.associate(connection.models);
Asignatura.associate(connection.models);
Alumno.associate(connection.models);
Profesor.associate(connection.models);

module.exports = connection;