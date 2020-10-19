const userDao = require('../dao/UserDao');

module.exports = class AuthService {
    constructor() {
    }

    signIn() {
        userDao.getById();
    }

    signUp() {
        userDao.getById();
        userDao.insert();
        userDao.getById();
    }

    logout() {
        userDao.update();
    }
}