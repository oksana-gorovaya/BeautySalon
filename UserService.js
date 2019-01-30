'use strict';

const dbConnection = require('./dbConnection');


class UserService {
    userCreate(username, password) {
        let sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

        dbConnection.query(sql, function (err) {
            if (err) {
                throw err;
            }
        });
    }

    async getUser(username, password) {
        let sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
        let dbResponse = await dbConnection.query(sql);

        return dbResponse.length >= 1;
    }

    updateSessionId(sessionId, username) {
        let sql = `UPDATE users SET sessionID = '${sessionId}' WHERE username = '${username}'`;

        dbConnection.query(sql, function (err) {
            if (err) {
                throw err;
            }
        });
    }
}

module.exports = new UserService();
