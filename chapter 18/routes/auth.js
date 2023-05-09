/*
 * Author: Amanda Martel
 * Filname: auth.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//import statments
const express = require('express');
// import express validator 
const { check, body } = require('express-validator/check');

// import authController 
const authController = require('../controllers/auth');
// import User model
const User = require('../models/user');

// create router 
const router = express.Router();

// create routers to GET /login
router.get('/login', authController.getLogin);

// create routers to GET /signup
router.get('/signup', authController.getSignup);

// create router to POST /login
router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address.')
      .normalizeEmail(),
    body('password', 'Password has to be valid.')
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim()
  ],
  authController.postLogin
);

// router to POST /signup
router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject(
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      })
      .normalizeEmail(),
    body(
      'password',
      'Please enter a password with only numbers and text and at least 5 characters.'
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body('confirmPassword')
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords have to match!');
        }
        return true;
      })
  ],
  authController.postSignup
);

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
