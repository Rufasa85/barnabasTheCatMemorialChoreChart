'use strict';
module.exports = function(sequelize, DataTypes) {
  var chore = sequelize.define('chore', {
    taskId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    roommateId: DataTypes.INTEGER,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        models.chore.belongsTo(models.roommate);
        models.chore.belongsTo(models.task);
      }
    }
  });
  return chore;
};
