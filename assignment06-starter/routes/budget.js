var express = require("express");
var router = express.Router();

/* GET Available Budget. */
router.get("/", function (req, res, next) {
    const availableBudget = 20500.0;
    res.send(JSON.stringify(availableBudget));
});

/* GET Income. */
router.get("/income", function (req, res, next) {
    const income = 30500.0;
    res.send(JSON.stringify(income));
});

/* GET Expense. */
router.get("/expense", function (req, res, next) {
    const expense = 10000.0;
    res.send(JSON.stringify(expense));
});

module.exports = router;
