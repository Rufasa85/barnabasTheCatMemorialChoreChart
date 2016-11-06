'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return (queryInterface.renameColumn(
      'chores',
      'task',
      'taskName'
    ))
  },

  down: function (queryInterface, Sequelize) {
    return (queryInterface.renameColumn(
      'chores',
      'taskName',
      'task'
    ))
  }
};
