'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('sevenLetters', [
            { word: 'painter' },
            { word: 'qualify' },
            { word: 'kathode' },
            { word: 'lantern' },
            { word: 'bracket' },
            { word: 'combine' },
            { word: 'droplet' },
            { word: 'eclipse' },
            { word: 'formula' },
            { word: 'utility' },
            { word: 'gravity' },
            { word: 'harpoon' },
            { word: 'beneath' },
            { word: 'through' },
            { word: 'triumph' },
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