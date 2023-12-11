const mysql = require('mysql2')

const connection = mysql.createPool({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASS,
    database : process.env.DB,
    port : process.env.PORTDB,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0,

});

connection.connect();

module.exports = {
    conn : Pool.promise()
};