const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    next();
});

app.use('/one', (req, res, next) => {
    res.send('<h1>one</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>hhh</h1>');
});

app.listen(3000);