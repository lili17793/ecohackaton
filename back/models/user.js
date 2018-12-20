'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    score: DataTypes.INTEGER,
    consumption: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    user.belongsToMany(models.challenge, {
      through: "challenge_user"
    })
    user.belongsToMany(models.fact, {
      through: "fact_user"
    })
    user.belongsToMany(models.app, {
      through: "app_user"
    })
  };
  return user;
};