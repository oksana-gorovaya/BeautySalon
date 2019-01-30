'use strict';

const bodyParser = require('body-parser');
const router = require('express').Router();
const UserController = require('./UserController');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/users', UserController.userSignUp);

router.get('/users', UserController.userLogin);

module.exports = router;