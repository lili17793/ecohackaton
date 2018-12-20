'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    score: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    user.belongsToMany(models.challenge, {
      through: "challenge_user"
    })
    user.belongsToMany(models.fact, {
      through: "fact_user"
    })
    user.belongsTo(models.consumption);
  };
  return user;
};