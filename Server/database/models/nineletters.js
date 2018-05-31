'use strict';
module.exports = (sequelize, DataTypes) => {
  var nineLetters = sequelize.define('nineLetters', {
    word: DataTypes.STRING
  }, {});
  nineLetters.associate = function(models) {
    // associations can be defined here
  };
  return nineLetters;
};