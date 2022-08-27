const path = require('path');

const express = require('express');
const router = express.Router();

router.use('/users', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

module.exports = router;