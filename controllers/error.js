/*
 * Author: Amanda Martel
 * Filname: error.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

exports.get404 = (req, res, next) => {
    //res.status(404).send('<h1>Page Not Found</h1>');
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: '/404'});
};