const EmployeeDataManagementService = require('../services/app.service');
const employeeDataManagementService = new EmployeeDataManagementService()

class EmployeeDataManagementController {

  async getPersonalInformation(request_ms) {
    return await employeeDataManagementService.getPersonalInformation(request_ms)
  }

}

module.exports = EmployeeDataManagementController;
