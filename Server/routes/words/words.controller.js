class WordsController {
    constructor(data) {
        this.data = data;
    }
    async getAllWords() {
        const allWords = await this.data.eightLetters.getAll();
        return allWords;
    }
}

module.exports = WordsController;