const { Model, DataTypes } = require('sequelize');

class Profesor extends Model {
  static init(sequelize) {
    super.init(
      {
        nombres: {
          type: DataTypes.STRING,
        },
        apellidoPaterno: {
          type: DataTypes.STRING,
        },
        apellidoMaterno: {
          type: DataTypes.STRING,
        },
        numeroEmpleado: {
          type: DataTypes.INTEGER,
        },
        horasClase: {
          type: DataTypes.INTEGER,
        },
      },
      { sequelize, tableName: 'Profesores' }
    );
  }
  static associate(models) {
    this.hasMany(models.Salon, {
      foreignKey: 'profesorId',
      as: 'salones',
      onDelete: 'CASCADE',
      hooks: true,
    });
    this.hasMany(models.Asignatura, {
      foreignKey: 'profesorId',
      as: 'asignaturas',
      onDelete: 'CASCADE',
      hooks: true,
    });

  }
}

module.exports = Profesor;