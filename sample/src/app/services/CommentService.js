const defaultCommentDao = require('../dao/commentDao');
const defaultBoardDao = require('../dao/boardDao');

module.exports = (dependencies) => {
    const {boardDao, commentDao} = Object.assign({boardDao: defaultBoardDao, commentDao: defaultCommentDao}, dependencies);
    return {
        method1: () => {
            commentDao.getAll();
        },
        method2: () => {
            commentDao.update();
            boardDao.getById();
            boardDao.update();
        }
    };
}