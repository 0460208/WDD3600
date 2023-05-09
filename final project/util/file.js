/*
 * Author: Amanda Martel
 * Filname: file.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

// import path
const fs = require('fs');

// create constant to delete the file 
const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            throw (err);
        }
    });
}

// exporr the module 
exports.deleteFile = deleteFile;