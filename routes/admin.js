/*
 * Author: Amanda Martel
 * Filname: admin.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//import path core module 
const path = require('path');

//import express
const express = require('express');

//import controller 
const adminController = require('../controllers/admin');

//import rootDir from path util path directory
//const rootDir = require('../util/path');

//create router object 
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/edit-products => GET
router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

// post delete product
router.post('/delete-product', adminController.postDeleteProduct);

//export router
module.exports = router; 

//export routes
//exports.routes = router;

//export products 
//exports.products = products;
