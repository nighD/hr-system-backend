'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('emp_att_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_uid: {
        type: Sequelize.STRING
      },
      date_att: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.FLOAT
      },
      note: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('emp_att_details');
  }
};
//# sourceMappingURL=20190529045545-create-emp-att-detail.js.map