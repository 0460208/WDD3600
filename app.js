/*
 * Author: Amanda Martel
 * Filname: app.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//import path core module 
const path = require('path');

//import express
const express = require('express');

//create body-parser constant
const bodyParser = require('body-parser');


//create app constant 
const app = express();

//import routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//parser
app.use(bodyParser.urlencoded({extended: false}));
//access stylesheet using static function
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//create 404 redirect
app.use((req, res, next) => {
    //res.status(404).send('<h1>Page Not Found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
