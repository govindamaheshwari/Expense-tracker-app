const express = require('express');

const Controller = require('../controllers/expense.js');

const router = express.Router();
router.get('/getExpenses',Controller.getExpanses);
router.post('/addExpenses',Controller.addExpanse);
router.delete('/deleteExpenses:expanseId',Controller.deleteExpanse)

module.exports = router;
