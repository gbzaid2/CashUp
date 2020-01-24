const router = require("express").Router();
const serverController = require("../controllers/serverController.js");

router.get("/transactions", serverController.getTransactions);
router.get("/categories", serverController.getCategories);
router.get("/budgets", serverController.getBudgets);
router.post("/transactions", serverController.submitTransaction);
router.post("/categories", serverController.submitCategory);
router.put("/transactions", serverController.updateTransaction);

module.exports = router;
