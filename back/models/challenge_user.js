'use strict';
module.exports = (sequelize, DataTypes) => {
  const challenge_user = sequelize.define('challenge_user', {
    isActive: {type: DataTypes.BOOLEAN, defaultValue: false},
    isValidated:  {type: DataTypes.BOOLEAN, defaultValue: false}
  }, {});
  challenge_user.associate = function(models) {
    challenge_user.belongsTo(models.user, { constraints: true});
    challenge_user.belongsTo(models.challenge, { constraints: true});
  };
  return challenge_user;
};