/*
 * Author: Amanda Martel
 * Filname: auth.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//import statments
const express = require('express');
// import express validator 
const { check } = require('express-validator/check');

// import authController 
const authController = require('../controllers/auth');

// create router 
const router = express.Router();

// create routers to GET /login
router.get('/login', authController.getLogin);

// create routers to GET /signup
router.get('/signup', authController.getSignup);

// create routers to POST /login
router.post('/login', authController.postLogin);

// create routers to POST /signup
router.post('/signup', check('email').isEmail(), authController.postSignup);

// create routers to POST /logout
router.post('/logout', authController.postLogout);

// create routers to GET /reset
router.get('/reset', authController.getReset);

// create routers to POST /reset
router.post('/reset', authController.postReset);

// create routers to GET /reset/:token
router.get('/reset/:token', authController.getNewPassword);

// create routers to POST /reset/:token
router.post('/new-password', authController.postNewPassword);

// export the module
module.exports = router;
