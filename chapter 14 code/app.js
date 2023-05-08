/*
 * Author: Amanda Martel
 * Filname: app.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import statements
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// create errorControler 
const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://martel:YES@cluster0.ii35hga.mongodb.net/shop?retryWrites=true&w=majority'

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

// set the app views 
app.set('view engine', 'ejs');
app.set('views', 'views');

// create Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

// create session
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

// if returning session find user by id 
app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

// call routes 
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

// call errorController 
app.use(errorController.get404);

// create mongoose connection
mongoose
  .connect(MONGODB_URI)
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Max',
          email: 'max@test.com',
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
