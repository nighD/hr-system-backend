'use strict';
module.exports = (sequelize, DataTypes) => {
  const emp_att_detail = sequelize.define('emp_att_detail', {
    emp_uid: DataTypes.STRING,
    date_att: DataTypes.DATE,
    duration: DataTypes.FLOAT,
    note: DataTypes.STRING,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {});
  emp_att_detail.associate = function(models) {
    // associations can be defined here
    emp_att_detail.belongsTo(models.User_Info,{
      foreignKey: 'emp_uid',
    });
  };
  return emp_att_detail;
};