const Axios = require("axios");
const serverModel = require("../models/serverModel.js")

module.exports = {
  getTransactions: (req, res) => {
    serverModel
      .("Insert server model")
      .then(data => res.send(data))
      .catch(err => console.log(err));
  },
  getCategories: (req, res) => {
    serverModel
      .("Insert server model")
      .then(data => res.send(data))
      .catch(err => console.log(err));
  },
  getBudgets: (req, res) => {
    serverModel
      .("Insert server model")
      .then(data => res.send(data))
      .catch(err => console.log(err));
  }
};
