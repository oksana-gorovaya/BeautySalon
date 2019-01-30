'use strict';

class Session {
    getSessionId() {
        let sessionId = '';
        let possibleSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 8; i++) {
            sessionId += possibleSymbols.charAt(Math.floor(Math.random() * possibleSymbols.length));
        }
        return sessionId;
    }
}

module.exports = new Session();