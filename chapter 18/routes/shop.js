/*
 * Author: Amanda Martel
 * Filname: shop.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import path 
const path = require('path');

// import express
const express = require('express');

// import shopController
const shopController = require('../controllers/shop');
// import the middleware
const isAuth = require('../middleware/is-auth');

// import router 
const router = express.Router();

// create routers 
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuth, shopController.getCart);

router.post('/cart', isAuth, shopController.postCart);

router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);

router.post('/create-order', isAuth, shopController.postOrder);

router.get('/orders', isAuth, shopController.getOrders);

// export the module
module.exports = router;
