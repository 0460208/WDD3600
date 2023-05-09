/*
 * Author: Amanda Martel
 * Filname: admin.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import statements
const path = require('path');

const express = require('express');

// import adminController 
const adminController = require('../controllers/admin');
// import isAuth
const isAuth = require('../middleware/is-auth');

// import router 
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', isAuth, adminController.postAddProduct);

// /admin/edit-product => GET
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

// /admin/edit-product => POST
router.post('/edit-product', isAuth, adminController.postEditProduct);

// /admin/delete-product => POST
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

// export the router 
module.exports = router;
