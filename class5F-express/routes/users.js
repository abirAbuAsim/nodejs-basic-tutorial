var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/available-budget', function(req, res, next) {
  // res.send('respond with a resource');

  const budget = "15000.00";
  // res.setHeader('Content-Type', 'application/json');
  res.send(budget);
});

/* GET Income. */
router.get('/income', function(req, res, next) {
  const income = "56999.99";
  res.send(income);
});

/* GET Expense. */
router.get('/expense', function(req, res, next) {
  const expense = "1762.69";
  res.send(expense);
});

module.exports = router;
