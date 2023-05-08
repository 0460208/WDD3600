/*
 * Author: Amanda Martel
 * Filname: order.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import mongoos
const mongoose = require('mongoose');

// create schema 
const Schema = mongoose.Schema;

// create orderSchema
const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  user: {
    name: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  }
});

// export the module 
module.exports = mongoose.model('Order', orderSchema);
