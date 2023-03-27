"use strict";
const { Model, DataTypes } = require("sequelize");

class Asignatura extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static init(sequelize) {
    super.init(
      {
        nombre: {
          type: DataTypes.STRING,
        },
        seriada: {
          type: DataTypes.BOOLEAN,
        },
        codigo: {
          type: DataTypes.STRING,
        },
      },
      { sequelize, tableName: "Asignaturas" }
    );
  }
  static associate(models) {
    // define association here
    this.belongsTo(models.Alumno, { foreignKey: "alumnoId", as: "alumno" });
    this.belongsTo(models.Profesor, {
      foreignKey: "profesorId",
      as: "profesor",
    });
    this.hasMany(models.Salon, {
      foreignKey: "asignaturaId",
      as: "asignaturas",
      onDelete: "CASCADE",
      hooks: true,
    });
  }
}

module.exports = Asignatura;
