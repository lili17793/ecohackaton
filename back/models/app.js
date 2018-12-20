'use strict';
module.exports = (sequelize, DataTypes) => {
  const app = sequelize.define('app', {
    name: DataTypes.STRING
  }, {});
  app.associate = function(models) {
    app.belongsToMany(models.user, {
      through: "app_user"
    })
  };
  return app;
};