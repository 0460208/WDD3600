/*
 * Author: Amanda Martel
 * Filname: shop.js
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

//call get method to add middleware function
router.get('/', (req, res, next) => {
    //send a file using join function
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

//export the router
module.exports = router; 