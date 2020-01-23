const Promise = require('bluebird');
const connection = require('../../db/connection.js');

connection.query = Promise.promisify(connection.query);

const getAllTransactions = () => {
    return connection.query("SELECT * FROM transactions");
};

const getAllCategories = () => {
    let myQuery = "SELECT categories.id, categories.name, categories.target, SUM(transactions.amount) AS total FROM categories RIGHT JOIN transactions ON categories.id = transactions.category_id GROUP BY transactions.category_id";
    return connection.query(myQuery);
}

const addCategory = (category) => {
    let values = [category.name, category.target];
    return connection.query(`INSERT INTO categories (name, target) VALUES (?, ?)`, values)
    
}

const updateTransaction = (transaction, callback) => {
    let values = [transaction.category_id, transaction.id];
    return connection.query('UPDATE transactions SET category_id = ? WHERE id = ?', values)
}

module.exports = {
    getAllTransactions,
    getAllCategories,
    addCategory,
    updateTransaction
};
