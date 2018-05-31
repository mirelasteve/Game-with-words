'use strict';
module.exports = (sequelize, DataTypes) => {
  var sevenLetters = sequelize.define('sevenLetters', {
    word: DataTypes.STRING
  }, {});
  sevenLetters.associate = function(models) {
    // associations can be defined here
  };
  return sevenLetters;
};