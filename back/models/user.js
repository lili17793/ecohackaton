'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    pseudo: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    passwordHash: {type: DataTypes.STRING, allowNull: false},
    score: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    isActive: {type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false}
  }, {});
  user.associate = function(models) {
    user.belongsToMany(models.challenge, {
      through: "challenge_user"
    })
    user.belongsToMany(models.fact, {
      through: "fact_user"
    })
    user.hasMany(models.consumption);
    user.belongsTo(models.grade);
  };
  return user;
};