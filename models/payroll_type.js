'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payroll_Type = sequelize.define('Payroll_Type', {
    emp_uid: DataTypes.STRING,
    type: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    paid_off_day: DataTypes.INTEGER,
    sick_off_day: DataTypes.INTEGER,
    worked_hours: DataTypes.INTEGER
  }, {});
  Payroll_Type.associate = function(models) {
    // associations can be defined here
    Payroll_Type.belongsTo(models.User_Info, {foreignKey: 'emp_uid', targetKey: 'emp_uid'});
  };
  return Payroll_Type;
};