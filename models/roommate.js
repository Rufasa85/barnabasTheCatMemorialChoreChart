'use strict';
module.exports = function(sequelize, DataTypes) {
  var roommate = sequelize.define('roommate', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.roommate.hasMany(models.chore);
      }
    }
  });
  return roommate;
};
