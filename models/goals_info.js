'use strict';
module.exports = (sequelize, DataTypes) => {
  const goals_info = sequelize.define('goals_info', {
    emp_uid: DataTypes.STRING,
    goal_name: DataTypes.STRING,
    criteria: DataTypes.STRING,
    progress: DataTypes.STRING,
    status: DataTypes.STRING,
    start_date: DataTypes.DATE,
    deadline: DataTypes.DATE,
    priority: DataTypes.INTEGER
  }, {});
  goals_info.associate = function(models) {
    // associations can be defined here
    goals_info.belongsTo(models.User_Info,{
      foreignKey: 'emp_uid',
    });
  };
  return goals_info;
};