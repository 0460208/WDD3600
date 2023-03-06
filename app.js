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

//import error controller
const errorController = require('./controllers/error');

// create db constant 
const db = require('./util/database');

//create app constant 
const app = express();

//set global configuration value to render dynamic content 
app.set('view engine', 'ejs');
app.set('views', 'views');

//import routes  
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { resourceLimits } = require('worker_threads');



//parser
app.use(bodyParser.urlencoded({extended: false}));
//access stylesheet using static function
app.use(express.static(path.join(__dirname, 'public')));

//import routes using adminData
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//create 404 redirect
app.use(errorController.get404);

app.listen(3000);
