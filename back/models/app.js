'use strict';
module.exports = (sequelize, DataTypes) => {
  const app = sequelize.define('app', {
    name: DataTypes.STRING
  }, {});
  app.associate = function(models) {
    app.belongsTo(models.consumption);
  };
  return app;
};