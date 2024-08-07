const express = require('express')
const router = express.Router();

const EmployeeDataManagementController = require('../controllers/app.controller')
const employeeDataManagementController = new EmployeeDataManagementController();

router.post('/personal-information/retrieve', async (req, res) => {

  const response = await employeeDataManagementController.getPersonalInformation(req.body);
  res.json(response);

})

module.exports = router;
