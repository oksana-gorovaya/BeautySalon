'use strict';

const UserService = require('./UserService');
const Session = require('./Session');

class UserController {

    userSignUp(req, res) {

        UserService.userCreate(req.body.username, req.body.password);

        res.send('User created!');
    }

    async userLogin(req, res) {
        let user = await UserService.getUser(req.query.username, req.query.password);
        if (user) {
            let myCookie = Session.getSessionId();
            res.cookie('userCookieName', myCookie);
            UserService.updateSessionId(myCookie, req.query.username);
            res.redirect('http://127.0.0.1/account/accountPage.html');
        } else {
            res.send('no user, go sign up');
        }
    }
}

module.exports = new UserController();