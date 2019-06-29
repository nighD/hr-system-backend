'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      members: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      date_att: {
        type: Sequelize.ARRAY(Sequelize.DATE)
      },
      title: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
      notification: {
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
    return queryInterface.dropTable('events');
  }
};
//# sourceMappingURL=20190615163241-create-events.js.map