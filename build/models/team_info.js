'use strict';

module.exports = function (sequelize, DataTypes) {
  var Team_Info = sequelize.define('Team_Info', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true
    // },
    team_name: DataTypes.STRING,
    team_dis: DataTypes.STRING,
    team_status: DataTypes.STRING
  }, {});

  Team_Info.associate = function (models) {
    // associations can be defined here
    Team_Info.hasMany(models.User_Info, {
      foreignKey: 'teamid'
    });
  };

  return Team_Info;
};
//# sourceMappingURL=team_info.js.map