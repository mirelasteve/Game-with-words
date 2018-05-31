'use strict';
module.exports = (sequelize, DataTypes) => {
  var complexWords = sequelize.define('complexWords', {
    word: DataTypes.STRING
  }, {});
  complexWords.associate = function(models) {
    // associations can be defined here
  };
  return complexWords;
};