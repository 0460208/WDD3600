/*
 * Author: Amanda Martel
 * Filname: product.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/


//import pool object
const db = require('../util/database');

//import Cart object
const Cart = require('./cart');

//create product class 
module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    //store item in array 
    save() {
        return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
        [this.title, this.price, this.imageUrl, this.description]
        );
    }

    //delete the product by product Id
    static deleteById(id) {

    }

    //fetch all items in array
    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    }
};