const commentDao = require('../dao/CommentDao');
const boardDao = require('../dao/BoardDao');

module.exports = class CommentService {
    constructor() {
    }

    method1() {
        commentDao.getAll();
    }

    method2() {
        commentDao.update();
        boardDao.getById();
        boardDao.update();
    }
}