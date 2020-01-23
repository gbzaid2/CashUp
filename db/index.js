
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



const getAllTransactions = function (callback) {
    // TODO - your code here!
    connection.query("SELECT * FROM transactions", (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data);
        }
    })
};

const getAllCategories = function (callback) {
    connection.query("SELECT categories.id,categories.name, categories.target, COUNT(*) as total, SUM(transactions.amount) as sum FROM categories LEFT JOIN transactions ON categories.id = transactions.category_id GROUP BY categories.id ORDER BY total DESC", (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
    })
}

const addCategory = function (category, callback) {
    let values = [category.name, category.target];
    connection.query(`INSERT INTO categories (name, target) VALUES (?, ?)`, values, (err, data, fields) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

const updateTransaction = function (transaction, callback) {
    let values = [transaction.category_id, transaction.id];
    connection.query('UPDATE transactions SET category_id = ? WHERE id = ?', values, (err, data, fields) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}
// var test = {
//   "id": 4,
//   "date": "2017-08-05T04:00:00.000Z",
//   "amount": -329.87,
//   "description": "OUTSIDE LANDS",
//   "category_id": 2
// }

// updateTransaction(test, (err, data) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })
module.exports = {
    getAllTransactions,
    getAllCategories,
    addCategory,
    updateTransaction
};
