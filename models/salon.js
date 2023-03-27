"use strict";
const { Model, DataTypes } = require("sequelize");

  class Salon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static init(sequelize) {
      super.init(
        {
          capacidad: {
            type: DataTypes.INTEGER,
          },
          estado: {
            type: DataTypes.STRING,
          },
        },
        { sequelize, tableName: "Salones" }
      );
    }
    static associate(models) {
      // define association here
      this.belongsTo(models.Alumno, { foreignKey: "alumnoId", as: "alumno" });
      this.belongsTo(models.Profesor, {
        foreignKey: "profesorId",
        as: "profesor",
      });
      this.belongsTo(models.Asignatura, {
        foreignKey: "asignaturaId",
        as: "asignatura",
      });
    }
  }

  module.exports = Salon;
