"use strict";
const { Model, DataTypes } = require("sequelize");

class Asignatura extends Model {
    static init(sequelize){
      super.init({
        nombre: {
          type: DataTypes.STRING
        },
        descripcion: {
          type: DataTypes.TEXT
        },
        creditos: {
          type: DataTypes.INTEGER
        },
        tipo: {
          type: DataTypes.STRING
        },
        codigo: {
          type: DataTypes.STRING
        },
      },
      { sequelize, tableName: 'Asignaturas' }
    );
  }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate(models) {
    // define association here
  }
}


module.exports = Asignatura;
