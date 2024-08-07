const express = require('express')
const router = express.Router();

const SavingsAccountController = require('../controllers/app.controller')
const savingsAccountController = new SavingsAccountController();

router.post('/saving-account/retrieve', async (req, res) => {

  const response = await savingsAccountController.getSavingAccount(req.body);
  res.json(response);

})

router.post('/create-saving-account/initiate', async (req, res) => {

  const response = await savingsAccountController.getCreateSavingAccount(req.body);
  res.json(response);

})

module.exports = router;
