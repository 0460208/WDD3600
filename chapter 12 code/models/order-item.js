/*
 * Author: Amanda Martel
 * Filname: order-item.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import sequelize
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//create OrderItem
const OrderItem = sequelize.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

// export module
module.exports = OrderItem;
