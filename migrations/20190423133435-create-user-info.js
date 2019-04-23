'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_lname: {
        type: Sequelize.STRING
      },
      emp_fname: {
        type: Sequelize.STRING
      },
      emp_gender: {
        type: Sequelize.STRING
      },
      emp_email: {
        type: Sequelize.STRING
      },
      emp_avatar: {
        type: Sequelize.STRING
      },
      emp_role: {
        type: Sequelize.STRING
      },
      teamid: {
        type: Sequelize.INTEGER
      },
      emp_status: {
        type: Sequelize.STRING
      },
      emp_dob: {
        type: Sequelize.DATE
      },
      emp_pass: {
        type: Sequelize.STRING
      },
      emp_street: {
        type: Sequelize.STRING
      },
      emp_phone: {
        type: Sequelize.INTEGER
      },
      emp_city: {
        type: Sequelize.STRING
      },
      emp_postal: {
        type: Sequelize.INTEGER
      },
      emp_country: {
        type: Sequelize.STRING
      },
      emp_uid: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('User_Infos');
  }
};