'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('goals_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_uid: {
        type: Sequelize.STRING
      },
      goal_name: {
        type: Sequelize.STRING
      },
      criteria: {
        type: Sequelize.STRING
      },
      progress: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      deadline: {
        type: Sequelize.DATE
      },
      priority: {
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
    return queryInterface.dropTable('goals_infos');
  }
};