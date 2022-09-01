const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: req.path,
        activeAddProduct: true,
        formsCss: true,
        productCss: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll().then(products => {
        res.render('shop', {
            prods: products,
            pageTitle: "Shop",
            path: req.path,
            hasProducts: products.length > 0,
            activeShop: true,
            productCss: true
        });
    });
};