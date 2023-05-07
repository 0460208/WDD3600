/*
 * Author: Amanda Martel
 * Filname: products.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

const mongodb = require('mongodb');

//import getDb
const getDb = require('../util/database').getDb;

// create Product class
class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = user;
  }
  // save to the database
  save() {
    const db = getDb();   
    let dbOp; 
    if (this._id) {
      // update the product
      dbOp = db
      .collection('products')
      .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  }
  // fetch all the products
  static fetchAll() {
    const db = getDb();
    return db
    .collection('products')
    .find()
    .toArray()
    .then(products => {
      console.log(products);
      return products;
    })
    .catch(err => {
      console.log(err);
    });
  }

  // fetch a single product
  static findById(prodId) {
    const db = getDb();
    return db
    .collection('products')
    .find({ _id: new mongodb.ObjectId(prodId) })
    .next()
    .then(product => {
      console.log(product);
      return product;
    })
    .catch(err => {
      console.log(err);
    });
  }

 // delete item by Id 
static deleteById(prodId) {
  const db = getDb();
  return db
    .collection('products')
    .deleteOne({ _id: new mongodb.ObjectId(prodId) })
    .then(result => {
      console.log('Deleted');
    })
    .catch(err => {
      console.log(err);
    });
}
}

// export module
module.exports = Product;
