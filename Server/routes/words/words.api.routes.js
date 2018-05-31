const {
    Router,
} = require('express');
const data = require('../../data');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('game-with-words', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
const WordsController = require('./words.controller');
const init = (app, data) => {
    const router = new Router();
    const controller = new WordsController(data);
    app.use('/', router);
    router
        .get('/guess-the-words', async(req, res) => {

            const words = await controller.getAllWords();
            res.send(words);
        });
};
module.exports = {
    init,
};