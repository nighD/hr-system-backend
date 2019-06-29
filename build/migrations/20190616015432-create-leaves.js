'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Leaves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_uid: {
        type: Sequelize.STRING
      },
      emp_name: {
        type: Sequelize.STRING
      },
      requested_date: {
        type: Sequelize.DATE
      },
      start_date: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },
      status: {
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
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Leaves');
  }
};
//# sourceMappingURL=20190616015432-create-leaves.js.map