'use strict';
module.exports = function(sequelize, DataTypes) {
  var task = sequelize.define('task', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.task.hasMany(models.chore);
      }
    }
  });
  return task;
};
