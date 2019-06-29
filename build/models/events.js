'use strict';

module.exports = function (sequelize, DataTypes) {
  var events = sequelize.define('events', {
    members: DataTypes.ARRAY(DataTypes.INTEGER),
    date_att: DataTypes.ARRAY(DataTypes.DATE),
    title: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    notification: DataTypes.INTEGER
  }, {});

  events.associate = function (models) {// associations can be defined here
  };

  return events;
};
//# sourceMappingURL=events.js.map