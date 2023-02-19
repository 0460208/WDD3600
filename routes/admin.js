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
const productsController = require('../controllers/products');

//import rootDir from path util path directory
//const rootDir = require('../util/path');

//create router object 
const router = express.Router();


//call GET function for /add-product 
router.get('/add-product', productsController.getAddProduct);

//call POST function to ask for /add-product
router.post('/add-product', productsController.postAddProduct);

//export router
module.exports = router; 

//export routes
//exports.routes = router;

//export products 
//exports.products = products;
