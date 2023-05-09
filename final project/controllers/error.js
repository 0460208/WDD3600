/*
 * Author: Amanda Martel
 * Filname: error.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// export get404
exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: '/404',
    isAuthenticated: req.session.isLoggedIn
  });
};

// export get500
exports.get500 = (req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
};
