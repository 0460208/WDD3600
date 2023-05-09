/*
 * Author: Amanda Martel
 * Filname: product.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// install mongoose
const mongoose = require('mongoose');

// create schema
const Schema = mongoose.Schema;

// create productSchema
const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// export the module Schema
module.exports = mongoose.model('Product', productSchema);
