'use strict';
module.exports = (sequelize, DataTypes) => {
  const challenge_user = sequelize.define('challenge_user', {
    isActive: Boolean,
    isValidated: Boolean,
  }, {});
  challenge_user.associate = function(models) {
    // associations can be defined here
    challenge_user.belongsTo(models.user);
    challenge_user.belongsTo(models.challenge);
  };
  return challenge_user;
};