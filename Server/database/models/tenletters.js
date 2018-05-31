'use strict';
module.exports = (sequelize, DataTypes) => {
  var tenLetters = sequelize.define('tenLetters', {
    word: DataTypes.STRING
  }, {});
  tenLetters.associate = function(models) {
    // associations can be defined here
  };
  return tenLetters;
};