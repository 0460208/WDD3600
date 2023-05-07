/*
 * Author: Amanda Martel
 * Filname: database.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import mongodb
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// create _db variable
let _db;

// create connection
const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://martel:YES@cluster0.ii35hga.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      // store connection to database in _db 
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No Database Found!';
};

// export the methods
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

