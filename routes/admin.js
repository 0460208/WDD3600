/*
 * Author: Amanda Martel
 * Filname: admin.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//import path core module 
const path = require('path');

//import express
const express = require('express');

//import rootDir from path util path directory
const rootDir = require('../util/path');

//create router object 
const router = express.Router();

//call GET function for /add-product 
router.get('/add-product', (req, res, next) => {
    //send a file using join function
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//call POST function to ask for /add-product
router.post('/add-product', (req, res) => {
    //extract what user sent
    console.log(req.body);
    //redirect
    res.redirect('/');
});

//export router
module.exports = router; 
