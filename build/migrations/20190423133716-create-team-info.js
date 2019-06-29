'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Team_Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_name: {
        type: Sequelize.STRING
      },
      team_dis: {
        type: Sequelize.STRING
      },
      team_status: {
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
    return queryInterface.dropTable('Team_Infos');
  }
};
//# sourceMappingURL=20190423133716-create-team-info.js.map