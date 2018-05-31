'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('eightLetters', [
            { word: 'cucumber' },
            { word: 'applause' },
            { word: 'workflow' },
            { word: 'accuracy' },
            { word: 'allusion' },
            { word: 'scenario' },
            { word: 'illusion' },
            { word: 'essayist' },
            { word: 'academic' },
            { word: 'evidence' },
            { word: 'daughter' },
            { word: 'describe' },
            { word: 'portrait' },
            { word: 'southern' },
            { word: 'creation' },
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