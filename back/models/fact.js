'use strict';
module.exports = (sequelize, DataTypes) => {
  const fact = sequelize.define('fact', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  fact.associate = function(models) {
    fact.belongsToMany(models.user, {
      through: "fact_user"
    })
  };
  return fact;
};


