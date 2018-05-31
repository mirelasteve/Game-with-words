'use strict';
module.exports = (sequelize, DataTypes) => {
  var sixLetters = sequelize.define('sixLetters', {
    word: DataTypes.STRING
  }, {});
  sixLetters.associate = function(models) {
    // associations can be defined here
  };
  return sixLetters;
};