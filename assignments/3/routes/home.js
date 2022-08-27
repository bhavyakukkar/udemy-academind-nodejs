const path = require('path');

const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

module.exports = router;