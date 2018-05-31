'use strict';
module.exports = (sequelize, DataTypes) => {
  var elevenLetters = sequelize.define('elevenLetters', {
    word: DataTypes.STRING
  }, {});
  elevenLetters.associate = function(models) {
    // associations can be defined here
  };
  return elevenLetters;
};