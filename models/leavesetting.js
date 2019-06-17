'use strict';
module.exports = (sequelize, DataTypes) => {
  const LeaveSetting = sequelize.define('LeaveSetting', {
    casual_leaves: DataTypes.INTEGER,
    medical_leaves: DataTypes.INTEGER,
    restricted_leave: DataTypes.INTEGER
  }, {});
  LeaveSetting.associate = function(models) {
    // associations can be defined here
  };
  return LeaveSetting;
};