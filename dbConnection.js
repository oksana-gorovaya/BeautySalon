'use strict';

const mysql = require('mysql');
const util = require('util');

const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "metoiwlu_root",
    password: "2HL9y",
    database: "metoiwlu_salon"
});

dbConnection.connect(function (err) {
    if (err) {
        throw err;
    }
});

dbConnection.query = util.promisify(dbConnection.query);

module.exports = dbConnection;