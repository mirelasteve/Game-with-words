'use strict';
module.exports = (sequelize, DataTypes) => {
  var eightLetters = sequelize.define('eightLetters', {
    word: DataTypes.STRING
  }, {});
  eightLetters.associate = function(models) {
    // associations can be defined here
  };
  return eightLetters;
};