'use strict';

const express = require('express');
const app = new express();

app.use('/', require('./router'));

/*app.use((err, req, res, next) => {
    global.console.error(err.stack);
    res.status(500).send('Do a refactoring, they said. It will be fun, they said.');
});*/

app.listen(3000, function(){
    console.log('node is running!');
});
