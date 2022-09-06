const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProducts = async (req, res, next) => {
    const product = new Product(req.body.title);
    await product.save()
    res.redirect('/');
}

exports.showProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            activeShop: true,
            productCSS: true
        });
    });
}

