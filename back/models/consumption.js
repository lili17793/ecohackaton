'use strict';
module.exports = (sequelize, DataTypes) => {
  const consumption = sequelize.define('consumption', {
    value: DataTypes.INTEGER
  }, {});
  consumption.associate = function(models) {
    // associations can be defined here
    consumption.belongsTo(models.user);
    consumption.belongsTo(models.app);
  };
  return consumption;
};