const { Router } = require('express');
const Container = require('../container.js');
const boardService = Container.get('BoardService');
const route = Router();

module.exports = (app) => {
    app.use('/boards', route);
    route.get('/',
        (req, res, next) => {
            boardService.method1();
            res.send('board-get');
        });
    route.post('/',
        (req, res, next) => {
            boardService.method1();
            res.send('board-post');
        });
    route.get('/:boardId',
        (req, res, next) => {
            boardService.method1();
            res.send(`board${req.params.boardId}-post`);
        });
};