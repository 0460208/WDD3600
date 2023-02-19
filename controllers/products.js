/*
 * Author: Amanda Martel
 * Filname: products.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//import product controller
const Product = require('../models/product');

//export statements
exports.getAddProduct = (req, res, next) => {
    //create response object
    res.render('add-product', { 
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
     })
};

exports.postAddProduct = (req, res, next) => {
    // create new product
    const product = new Product(req.body.title);
    //save the product
    product.save();
    //redirect
    res.redirect('/');
};


exports.getProducts = (req, res, next) => {
    //fetch all products
    Product.fetchAll((products) => {
    //return template
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
  });
};