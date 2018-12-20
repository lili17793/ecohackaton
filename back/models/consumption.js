'use strict';
module.exports = (sequelize, DataTypes) => {
  const consumption = sequelize.define('consumption', {
    value: DataTypes.INTEGER
  }, {});
  consumption.associate = function(models) {
    // associations can be defined here
    consumption.hasMany(models.user);
    consumption.hasMany(models.app);
  };
  return consumption;
};