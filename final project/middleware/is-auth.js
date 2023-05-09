/*
 * Author: Amanda Martel
 * Filname: is-auth.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// export the module for the isLoggedIn session

module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}