'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('nineLetters', [
            { word: 'detection' },
            { word: 'component' },
            { word: 'ambitious' },
            { word: 'somewhere' },
            { word: 'narrative' },
            { word: 'technique' },
            { word: 'historian' },
            { word: 'zoologist' },
            { word: 'theirself' },
            { word: 'skeptical' },
            { word: 'snowstorm' },
            { word: 'lyrically' },
            { word: 'macadamia' },
            { word: 'gygahertz' },
            { word: 'ferryboat' },
            { word: 'crossroad' },
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