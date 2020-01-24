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
    // console.log('TESTING MODEL ADD CAT:', category);
    let values = [category.title, category.limit];
    return connection.query(`INSERT INTO categories (name, target) VALUES (?, ?)`, values)
    
}


const updateTransaction = (transactionId, category_id) => {
    let values = [category_id, transactionId];
    return connection.query('UPDATE transactions SET category_id = ? WHERE id = ?', values)
}

const addTransaction = (transaction) => {
    //console.log('TESTING MODEL REQ:', req);
    //let values = [req.date, Number(req.cost), req.description, req.selectedCategory]
    return connection.query(`Select id from categories where name = "${transaction.selectedCategory}"`)
    .then(data => {
        let id = data[0].id;
        let values = [transaction.date, transaction.cost, transaction.description, id]
        return connection.query(`INSERT INTO transactions (date, amount, description, category_id) VALUES (?, ?, ?, ?)`, values);

    })
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



// let myTrans = {
//     date: '2020-09-12',
//     cost: '5400',
//     description: 'Eat panini',
//     selectedCategory: 'GROCERIES'
// }

// addTransaction(myTrans)
// .then(data => console.log(data))
// .catch(err => console.log(err))
