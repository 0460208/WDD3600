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

// import mongoose
const mongoose = require('mongoose');

// import models and controllers 
const errorController = require('./controllers/error');
// const mongoConnect = require('./util/database').mongoConnect;
// const User = require('./models/user')

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
   User.findById('5bab316ce0a7c75f783cb8a8')
     .then(user => {
       req.user = user;
       next();
     })
     .catch(err => console.log(err));
 });


app.use('/admin', adminRoutes);
app.use(shopRoutes);

// call 404 error page 
app.use(errorController.get404);

// connect to database using mongoose
mongoose
  .connect(
    'mongodb+srv://martel:YES@cluster0.ii35hga.mongodb.net/shop?retryWrites=true&w=majority'
    )
  .then(result => {
     User.findOne().then(user => {
       if (!user) {
         const user = new User({
           name: 'max',
           email: 'test@email.com',
           cart: {
             items: []
           }
         });
         user.save();
       }
     });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


// connect to server using mongoConnect
// mongoConnect(() => {
//  app.listen(3000);
// })