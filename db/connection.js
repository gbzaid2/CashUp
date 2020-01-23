
const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


connection.connect((err, res) => {
    if (err) {
        console.log("Something went wrong: ", err);
    } else {
        console.log("SQL connected");
    }
});

module.exports = connection;
