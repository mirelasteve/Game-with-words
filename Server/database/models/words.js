'use strict';
module.exports = (sequelize, DataTypes) => {
    var Words = sequelize.define('Words', {
        fiveLetters: DataTypes.STRING,
        sixLetters: DataTypes.STRING,
        sevenLetters: DataTypes.STRING,
        eightLetters: DataTypes.STRING,
        nineLetters: DataTypes.STRING,
        tenLetters: DataTypes.STRING,
        elevenLetters: DataTypes.STRING
    }, {});
    Words.associate = function(models) {
        // associations can be defined here
    };
    return Words;
};