'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('complexWords', [
            { word: 'progressively' },
            { word: 'beginner-friendly' },
            { word: 'approximately' },
            { word: 'university-educated' },
            { word: 'collaboration' },
            { word: 'characterisation' },
            { word: 'pronunciation' },
            { word: 'individuality' },
            { word: 'mother-in-law' },
            { word: 'free-for-all' },
            { word: '' },
            { word: '' },
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