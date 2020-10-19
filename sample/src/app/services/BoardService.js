const boardDao = require('../dao/BoardDao');

module.exports = class BoardService {
    constructor() {
    }

    method1() {
        boardDao.getAll();
    }

    method2() {
        boardDao.getById();
        boardDao.insert();
    }
}