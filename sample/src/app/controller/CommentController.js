const { Router } = require('express');
const Container = require('../container.js');
const commentService = Container.get('CommentService');
const route = Router({mergeParams: true});

module.exports = (app) => {
    app.use('/boards/:boardId/comment', route);
    route.get('/',
        (req, res, next) => {
            const { boardId } = req.params;
            commentService.method1();
            res.send(`method1 with ${boardId}`);
        });
    route.post('/',
        (req, res, next) => {
            const { boardId } = req.params;
            commentService.method1();
            res.send(`method2 with ${boardId}`);
        });
    route.post('/',
        (req, res, next) => {
            const { boardId } = req.params;
            commentService.method1();
            res.send(`method3 with ${boardId}`);
        });
};