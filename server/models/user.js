'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model{}

  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize})

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Report,{foreignKey:'UserId'})
  };
  return User;
};