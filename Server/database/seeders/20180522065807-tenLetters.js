'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tenLetters', [
            { word: 'consultant' },
            { word: 'expression' },
            { word: 'compatible' },
            { word: 'technology' },
            { word: 'bequeathed' },
            { word: 'motivation' },
            { word: 'artificial' },
            { word: 'friendship' },
            { word: 'generosity' },
            { word: 'descendant' },
            { word: 'noblewoman' },
            { word: 'lieutenant' },
            { word: 'reputation' },
            { word: 'possession' },
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