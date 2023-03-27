const { Model, DataTypes } = require('sequelize');

class Alumno extends Model {
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
        matricula: {
          type: DataTypes.STRING,
        },
        promedio: {
          type: DataTypes.DOUBLE,
        },
      },
      { sequelize, tableName: 'Alumnos' }
    );
  }
  static associate(models) {
    this.hasMany(models.Salon, {
      foreignKey: 'alumnoId',
      as: 'salones',
      onDelete: 'CASCADE',
      hooks: true,
    });
    this.hasMany(models.Asignatura, {
      foreignKey: 'alumnoId',
      as: 'asignaturas',
      onDelete: 'CASCADE',
      hooks: true,
    });

  }
}

module.exports = Alumno; 