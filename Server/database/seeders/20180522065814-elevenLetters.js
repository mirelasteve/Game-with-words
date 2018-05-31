'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('elevenLetters', [
            { word: 'pre-eminent' },
            { word: 'scholarship' },
            { word: 'attribution' },
            { word: 'adolescence' },
            { word: 'spontaneous' },
            { word: 'sensibility' },
            { word: 'aerostatics' },
            { word: 'bodybuilder' },
            { word: 'carefulness' },
            { word: 'convenience' },
            { word: 'determinate' },
            { word: 'mathematics' },
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