const router = require("express").Router();
const serverController = require("../controllers/serverController.js");

router.get("/transactions", serverController.getTransactions);
router.get("/categories", serverController.getCategories);

module.exports = router;
