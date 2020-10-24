const { Router } = require('express');
const commentService = require('../services/CommentService.js')();
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