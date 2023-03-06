/*
 * Author: Amanda Martel
 * Filname: database.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//import mysql
const mysql = require('mysql2');

//create connection pool 
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Dally500$'
});

//export pool
module.exports = pool.promise();