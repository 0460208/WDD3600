/*
 * Author: Amanda Martel
 * Filname: app.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import path 
const path = require('path');

// import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

// import models and controllers 
const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user')

//create app constant 
const app = express();

// set the app view engine 
app.set('view engine', 'ejs');
app.set('views', 'views');

// create admin and shop routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('6457028b03deff6e24bec8b3')
    .then(user => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// call 404 error page 
app.use(errorController.get404);

// connect to server
mongoConnect(() => {
  app.listen(3000);
})