const express = require('express');

const router = express.Router();

const userLibrary = [];

router.post('/', (req, res, next) => {
    userLibrary.push(req.body.username);
    res.redirect('/users');
})

module.exports = {router, userLibrary};