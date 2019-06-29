'use strict';

module.exports = function (sequelize, DataTypes) {
  var emp_att_detail = sequelize.define('emp_att_detail', {
    emp_uid: DataTypes.STRING,
    date_att: DataTypes.DATE,
    duration: DataTypes.FLOAT,
    note: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});

  emp_att_detail.associate = function (models) {
    // associations can be defined here
    emp_att_detail.belongsTo(models.User_Info, {
      foreignKey: 'emp_uid'
    });
  };

  return emp_att_detail;
};
//# sourceMappingURL=emp_att_detail.js.map