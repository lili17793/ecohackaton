'use strict';
module.exports = (sequelize, DataTypes) => {
  const grade = sequelize.define('grade', {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    image: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  grade.associate = function(models) {
    grade.hasMany(models.user)
  };
  return grade;
};