const { fetchExpenses, addExpenses, deleteExpenses } = require('../Controllers/expenseController');

const router = require('express').Router();

router.get('/', fetchExpenses);
router.post('/', addExpenses);
router.delete('/:expenseId', deleteExpenses);

module.exports = router;