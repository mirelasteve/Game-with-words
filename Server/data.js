const {
    fiveLetters,
    sixLetters,
    sevenLetters,
    eightLetters,
    nineLetters,
    tenLetters,
    elevenLetters,
    twelveLetters,
    complexWords,
} = require("./database/models");
const Data = require("./generic-data");
const data = {
    fiveLetters: new Data(fiveLetters),
    sixLetters: new Data(sixLetters),
    sevenLetters: new Data(sevenLetters),
    eightLetters: new Data(eightLetters),
    nineLetters: new Data(nineLetters),
    tenLetters: new Data(tenLetters),
    elevenLetters: new Data(elevenLetters),
    twelveLetters: new Data(twelveLetters),
    complexwords: new Data(complexWords),
}
module.exports = data;