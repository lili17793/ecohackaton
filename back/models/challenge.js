'use strict';
module.exports = (sequelize, DataTypes) => {
  const challenge = sequelize.define('challenge', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {});
  challenge.associate = function(models) {
    challenge.belongsToMany(models.user, {
      through: "challenge_user"
    })
  };
  return challenge;
};