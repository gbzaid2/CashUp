const Axios = require("axios");
const serverModel = require("../models/serverModel.js")

module.exports = {
  getTransactions: (req, res) => {
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
  }
};
