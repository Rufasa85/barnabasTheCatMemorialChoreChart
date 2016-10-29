'use strict';
module.exports = function(sequelize, DataTypes) {
  var chore = sequelize.define('chore', {
    task: DataTypes.STRING,
    date: DataTypes.DATE,
    roommateId: DataTypes.INTEGER,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        models.chore.belongsTo(models.roommate);
      }
    }
  });
  return chore;
};
