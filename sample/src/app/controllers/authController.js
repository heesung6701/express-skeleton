const { Router } = require('express');
const authService = require('../services/authService.js')();
const route = Router();

module.exports = (app) => {
    app.use('/auth', route);
    route.post('/signup',
        (req, res, next) => {
            authService.signUp();
            res.send('signup');
        });
    route.post('/signin',
        (req, res, next) => {
            authService.signIn();
            res.send('signin');
        });
    route.get('/logout',
        (req, res, next) => {
            authService.logout();
            res.send('logout');
        });
};