
/*
 * Author: Amanda Martel
 * Filname: auth.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//import statments
const express = require('express');

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
router.post('/signup', authController.postSignup);

// create routers to POST /logout
router.post('/logout', authController.postLogout);

// export the module
module.exports = router;