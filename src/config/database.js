require('dotenv').config();
const mysql = require('mysql2');

//test connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,          //3307,
    user: process.env.DB_USER,          //'root',
    password: process.env.DB_PASSWORD,  //'123456',
    database: process.env.DB_NAME,      //'sang',
});

module.exports = connection;