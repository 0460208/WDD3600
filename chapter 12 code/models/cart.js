/*
 * Author: Amanda Martel
 * Filname: cart.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import sequelize
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// create Cart
const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

// export module 
module.exports = Cart;
