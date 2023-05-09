/*
 * Author: Amanda Martel
 * Filname: path.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import path
const path = require('path');

// export the module 
module.exports = path.dirname(process.mainModule.filename);