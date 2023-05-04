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
const sequelize = require('./util/database');

//import models 
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

//create app constant 
const app = express();

//set global configuration value to render dynamic content 
app.set('view engine', 'ejs');
app.set('views', 'views');

//import routes  
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//parser
app.use(bodyParser.urlencoded({extended: false}));
//access stylesheet using static function
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById(1)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });

//import routes using adminData
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//create 404 redirect
app.use(errorController.get404);

// sequelize many to many relations
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });


// create sync method
sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findById(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    return user.createCart();
  })
  .then(cart => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
