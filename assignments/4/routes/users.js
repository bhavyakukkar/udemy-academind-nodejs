const express = require('express');

const router = express.Router();
const userLibrary = require('./add-user').userLibrary;

router.get('/', (req, res, next) => {
    res.render('users', {pageTitle: 'Users', pageHeading: 'Users', userLibrary});
})

module.exports = router;