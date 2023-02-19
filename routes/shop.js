/*
 * Author: Amanda Martel
 * Filname: shop.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//import path core module 
const path = require('path');

//import express
const express = require('express');

//import products controller
const productsController = require('../controllers/products');

//create router object
const router = express.Router();

//call get method to add middleware function
router.get('/', productsController.getProducts);

//export the router
module.exports = router; 