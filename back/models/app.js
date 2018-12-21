'use strict';
module.exports = (sequelize, DataTypes) => {
  const app = sequelize.define('app', {
    name: DataTypes.STRING
  }, {});
  app.associate = function(models) {
    app.hasMany(models.consumption);
  };
  return app;
};