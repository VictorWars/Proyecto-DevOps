'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profesores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombres: {
        type: Sequelize.STRING
      },
      apellidoPaterno: {
        type: Sequelize.STRING
      },
      apellidoMaterno: {
        type: Sequelize.STRING
      },
      numeroEmpleado: {
        type: Sequelize.INTEGER
      },
      horasClase: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profesors');
  }
};