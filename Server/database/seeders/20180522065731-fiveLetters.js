'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('fiveLetters', [
            { word: 'tenth' },
            { word: 'wagon' },
            { word: 'write' },
            { word: 'magic' },
            { word: 'cream' },
            { word: 'dough' },
            { word: 'ozone' },
            { word: 'reach' },
            { word: 'horse' },
            { word: 'shape' },
            { word: 'favor' },
            { word: 'guest' },
            { word: 'truth' }
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};