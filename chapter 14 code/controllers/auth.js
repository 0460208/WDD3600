/*
 * Author: Amanda Martel
 * Filname: auth.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import model
const User = require('../models/user');

// get Login
exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

// export getSignup
exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};
// export postLogin
exports.postLogin = (req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

// export postSignup
exports.postSignup = (req, res, next) => {};

//export postLogout
exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
