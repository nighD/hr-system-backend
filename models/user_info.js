'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Info = sequelize.define('User_Info', {
    emp_lname: DataTypes.STRING,
    emp_fname: DataTypes.STRING,
    emp_gender: DataTypes.STRING,
    emp_email: DataTypes.STRING,
    emp_avatar: DataTypes.STRING,
    emp_role: DataTypes.STRING,
    teamid: DataTypes.INTEGER,
    emp_status: DataTypes.STRING,
    emp_dob: DataTypes.DATE,
    emp_pass: DataTypes.STRING,
    emp_street: DataTypes.STRING,
    emp_phone: DataTypes.INTEGER,
    emp_city: DataTypes.STRING,
    emp_postal: DataTypes.INTEGER,
    emp_country: DataTypes.STRING,
    emp_uid: DataTypes.STRING
  }, {});
  User_Info.associate = function(models) {
    // associations can be defined here
    User_Info.belongsTo(models.Team_Info,{
      foreignKey: 'teamid',
      onDelete: 'CASCADE'
    });
  };
  return User_Info;
};