const Promise = require('bluebird');
const connection = require('../../db/connection.js');

connection.query = Promise.promisify(connection.query);

const getAllTransactions = () => {
    // return category_name instead of category_id
    let query = "SELECT transactions.id, transactions.date, transactions.amount, transactions.description, transactions.category_id, categories.name FROM transactions JOIN categories ON transactions.category_id = categories.id"
    return connection.query(query);
};

const getAllCategories = () => {
    let myQuery = "SELECT categories.id, categories.name, categories.target, SUM(transactions.amount) AS total FROM categories RIGHT JOIN transactions ON categories.id = transactions.category_id GROUP BY transactions.category_id";
    return connection.query(myQuery);
}

const addCategory = (category) => {
    let values = [category.title, category.limit];
    return connection.query(`INSERT INTO categories (name, target) VALUES (?, ?)`, values)
    
}

const addTransaction = (transaction) => {
    let values = [transaction.date, transaction.cost, transaction.description, transaction.selectedCategory]
    connection.query("SELECT id FROM categories WHERE name = ?", [values[3]])
    // .then(data => console.log(data))
    // .catch(err => console.log(err));
    // console.log(values);
    // return connection.query(`INSERT INTO transactions (date, amount, description, category_id) VALUES (${values[0]}, ${values[1]}, ${values[2]}, ${values[3]}, (SELECT id FROM categories WHERE name = ?))`);
}
const updateTransaction = (transaction) => {
    let values = [transaction.category_name, transaction.id];
    connection.query("Select id FROM categories WHERE name = ")
    return connection.query('UPDATE transactions SET category_id = ? WHERE id = ?', values)
}

const getCategoryById = (id) => {
    return connection.query("SELECT name FROM categories WHERE id = ?", [id]);
}


// getAllTransactions().then(data =>console.log(data)).catch(err => consolelo)

module.exports = {
    getAllTransactions,
    getAllCategories,
    addCategory,
    updateTransaction,
    addTransaction,
    getCategoryById
};



// let myTrans = {
//     date: '2020-09-12',
//     cost: '5400',
//     description: 'Eat panini',
//     selectedCategory: 'GROCERIES'
// }

// addTransaction(myTrans)
// .then(data => console.log(data))
// .catch(err => console.log(err))
