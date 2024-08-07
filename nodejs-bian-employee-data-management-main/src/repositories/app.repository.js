const { BACKEND_PERSONAL_INFORMATION } = require('../config');

const axios = require('axios').default

class EmployeeDataManagementRepository {

  async getPersonalInformation(request_backend) {
    const response = await axios.post(BACKEND_PERSONAL_INFORMATION, request_backend);
    return response.data;
  }

}

module.exports = EmployeeDataManagementRepository;
