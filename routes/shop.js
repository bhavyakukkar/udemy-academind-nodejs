const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');
const adminData = require('./admin').products;

const router = express.Router();


router.get('/', (req, res, next) => {
    const products = adminData;
    res.render('shop', {
        prods: products,
        pageTitle: "Shop",
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCss: true
    });
});

module.exports = router;