const defaultBoardDao = require('../dao/boardDao');

module.exports = (dependencies) => {
    const {boardDao} = Object.assign({boardDao: defaultBoardDao}, dependencies);

    return {
        method1: () => {
            boardDao.getAll();
        },
        method2: () => {
            boardDao.getById();
            boardDao.insert();
        }    
    };
}