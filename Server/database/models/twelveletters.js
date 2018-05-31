'use strict';
module.exports = (sequelize, DataTypes) => {
  var twelveLetters = sequelize.define('twelveLetters', {
    word: DataTypes.STRING
  }, {});
  twelveLetters.associate = function(models) {
    // associations can be defined here
  };
  return twelveLetters;
};