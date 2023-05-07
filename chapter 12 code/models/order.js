/*
 * Author: Amanda Martel
 * Filname: order.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import sequelize
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// create Order
const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

// export module 
module.exports = Order;
