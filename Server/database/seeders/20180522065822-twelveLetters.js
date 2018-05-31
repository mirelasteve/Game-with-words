'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('twelveLetters', [
            { word: 'introduction' },
            { word: 'dramatically' },
            { word: 'functionally' },
            { word: 'deliberately' },
            { word: 'abbreviature' },
            { word: 'transcending' },
            { word: 'sportswriter' },
            { word: 'respectively' },
            { word: 'pyrotechnics' },
            { word: 'radioecology' },
            { word: 'philanthropy' },
            { word: 'pacification' },
            { word: 'interspacing' },
            { word: 'hydrothermal' },
            { word: 'iconographer' },
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