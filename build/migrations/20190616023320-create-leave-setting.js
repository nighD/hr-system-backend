'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('LeaveSettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      casual_leaves: {
        type: Sequelize.INTEGER
      },
      medical_leaves: {
        type: Sequelize.INTEGER
      },
      restricted_leave: {
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
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('LeaveSettings');
  }
};
//# sourceMappingURL=20190616023320-create-leave-setting.js.map