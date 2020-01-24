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
    // console.log('TESTING MODEL ADD CAT:', category);
    let values = [category.title, category.limit];
    return connection.query(`INSERT INTO categories (name, target) VALUES (?, ?)`, values)
    
}

const updateTransaction = (transactionId, category_id) => {
    let values = [category_id, transactionId];
    return connection.query('UPDATE transactions SET category_id = ? WHERE id = ?', values)
}

const addTransaction = (req, res) => {
    console.log('TESTING MODEL REQ:', req);
    let values = [req.date, Number(req.cost), req.description, req.selectedCategory]
    // return connection.query(`INSERT INTO transactions (date, amount, description, category_id) VALUES (?, ?, ?)`)
}

const getCategoryById = (id) => {
    console.log('TESTING MODEL GET CAT BY ID:', id); // id is a NUMBER
    let values = [id];
    return connection.query('SELECT * from categories WHERE id = ?', values)
}

module.exports = {
    getAllTransactions,
    getAllCategories,
    addCategory,
    updateTransaction,
    addTransaction,
    getCategoryById
};
