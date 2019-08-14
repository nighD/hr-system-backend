'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payroll_Types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_uid: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      payment_method: {
        type: Sequelize.STRING
      },
      paid_off_day: {
        type: Sequelize.INTEGER
      },
      sick_off_day: {
        type: Sequelize.INTEGER
      },
      worked_hours: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payroll_Types');
  }
};