const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');
const adminData = require('./admin').products;

const router = express.Router();


router.get('/', (req, res, next) => {
    console.log(adminData);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;