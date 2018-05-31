'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('sixLetters', [
            { word: 'silver' },
            { word: 'coffee' },
            { word: 'legend' },
            { word: 'unique' },
            { word: 'yellow' },
            { word: 'inside' },
            { word: 'target' },
            { word: 'speech' },
            { word: 'admire' },
            { word: 'member' },
            { word: 'honour' },
            { word: 'street' },
            { word: 'famous' },
            { word: 'appeal' },
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