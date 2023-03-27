"use strict";
const { Model, DataTypes } = require("sequelize");

  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static init(sequelize) {
      super.init(
        {
          username: {
            type: DataTypes.STRING,
          },
          email: {
            type: DataTypes.STRING,
          },
          password: {
            type: DataTypes.STRING,
          },
          lastLoginDate: {
            type: DataTypes.DATE,
          },
        },
        { sequelize, tableName: "Usuarios" }
      );
    }
    
  }


module.exports = Usuario;
