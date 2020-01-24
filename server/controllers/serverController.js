const Axios = require("axios");
const serverModel = require("../models/serverModel.js")

module.exports = {
  getTransactions: (req, res) => {
    console.log('TESTING THIS METHOD');
    serverModel
      .getAllTransactions()
      .then(data => res.send(data))
      .catch(err => console.log(err));
  },
  getCategories: (req, res) => {
    serverModel
      .getAllCategories()
      .then(data => res.send(data))
      .catch(err => console.log(err));
  },
  getBudgets: (req, res) => {
    serverModel
      .getAllCategories()
      .then(data => res.send(data))
      .catch(err => console.log(err));
  },
  submitTransaction: (req, res) => {
    serverModel
    .addTransaction(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => res.sendStatus(500));
  },
  submitCategory: (req, res) => {
    serverModel
    .addCategory(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => res.sendStatus(500));
  },
  updateTransaction: (req, res) => {
      let transactionId = req.params.id;
      let category = req.body.category;
      serverModel
      .updateTransaction(transactionId, category)
      .then(() => res.sendStatus(200))
      .catch(err => res.sendStatus(500));
  },
  getCategoryById: (req, res) => {
    
    let id = req.query.ID;
    // console.log('IS THIS WORKING:', req.query);
    serverModel
    .getCategoryById(id)
    .then(data => res.send(data))
    .catch(err => res.sendStatus(500));
  }
};
