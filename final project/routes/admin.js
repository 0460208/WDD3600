/*
 * Author: Amanda Martel
 * Filname: admin.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import statements
const path = require('path');

// import express
// import express-validator/check
const express = require('express');
const { body } = require('express-validator/check');

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
router.post(
  '/add-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postEditProduct
);

// router POST /delete-product
router.delete('/product/:productId', isAuth, adminController.deleteProduct);

// export the module 
module.exports = router;
