const { Router } = require('express');
const AuthController = require('./controllers/authController.js');
const BoardController = require('./controllers/boardController.js');
const CommentController = require('./controllers/commentController.js');

module.exports = () => {
	const app = Router();
    AuthController(app);
	BoardController(app);
    CommentController(app);
	return app
}