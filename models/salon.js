"use strict";
const { Model, DataTypes } = require("sequelize");

  class Salon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static init(sequelize){
    super.init({
      nombre: {
        type: DataTypes.STRING
      },
      tipo: {
        type: DataTypes.STRING
      },
          capacidad: {
        type: DataTypes.INTEGER
          },
          estado: {
        type: DataTypes.STRING
          },
      comodidades: {
        type: DataTypes.TEXT
        },
    }, 
    { sequelize, tableName: 'Salones' }
      );
    }
    static associate(models) {
      // define association here
    }
  }


  module.exports = Salon;
