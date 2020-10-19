const { Router } = require('express');
const AuthController = require('./controller/AuthController.js');
const BoardController = require('./controller/BoardController.js');
const CommentController = require('./controller/CommentController.js');

module.exports = () => {
	const app = Router();
    AuthController(app);
	BoardController(app);
    CommentController(app);
	return app
}