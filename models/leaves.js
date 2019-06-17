'use strict';
module.exports = (sequelize, DataTypes) => {
  const Leaves = sequelize.define('Leaves', {
    emp_uid: DataTypes.STRING,
    emp_name: DataTypes.STRING,
    requested_date: DataTypes.DATE,
    start_date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Leaves.associate = function(models) {
    // associations can be defined here
    Leaves.belongsTo(models.User_Info,{
      foreignKey: 'emp_uid',
    });
  };
  return Leaves;
};