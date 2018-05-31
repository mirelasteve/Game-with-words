'use strict';
module.exports = (sequelize, DataTypes) => {
  var fiveLetters = sequelize.define('fiveLetters', {}, {});
  fiveLetters.associate = function(models) {
    // associations can be defined here
  };
  return fiveLetters;
};