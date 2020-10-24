const userDao = require('../../../../practice-mocha/src/app/dao/userDao');
const defaultUserDao = require('../dao/userDao')

module.exports = (dependencies) => {
    const {userDao} = Object.assign({userDao: defaultUserDao}, dependencies);
    return {
        signIn: () => {
            userDao.getById();
        },
    
        signUp: () => {
            userDao.getById();
            userDao.insert();
            userDao.getById();
        },
    
        logout: () => {
            userDao.update();
        }
    };
}