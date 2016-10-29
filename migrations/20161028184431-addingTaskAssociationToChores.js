'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('chores', 'taskId',Sequelize.INTEGER)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('chores', 'taskId')
  }
};
