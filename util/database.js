/*
 * Author: Amanda Martel
 * Filname: database.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

//use Sequielize
const Sequelize = require('sequelize');

//create new Sequelize instance
const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', 
{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;