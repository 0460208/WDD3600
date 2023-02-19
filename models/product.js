/*
 * Author: Amanda Martel
 * Filname: product.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/


//import fs
const fs = require('fs');

const path = require('path');

//create global constant for p
const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data',
    'products.json'
);

//create helper function to read the file
const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });    
}

//create product class 
module.exports = class Product {
    constructor(t) {
        this.tite = t;
    }

    //store item in array 
    save() {
        //save all products to a file
            getProductsFromFile(products => {
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    //console.log(err);
                });
            });
    }

    //fetch all items in array
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};