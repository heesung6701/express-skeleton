const commentDao = require('../dao/commentDao');
const boardDao = require('../dao/boardDao');

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