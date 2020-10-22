const userDao = require('../dao/userDao');

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