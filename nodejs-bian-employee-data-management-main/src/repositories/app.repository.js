const { BACKEND_SAVING_ACCOUNT_DETAIL } = require('../config');
const { BACKEND_SAVING_ACCOUNT_CREATE } = require('../config');

const axios = require('axios').default

class SavingsAccountRepository {

  async getSavingAccount(request_backend) {
    const response = await axios.post(BACKEND_SAVING_ACCOUNT_DETAIL, request_backend);
    return response.data;
  }

  async getCreateSavingAccount(request_backend) {
    const response = await axios.post(BACKEND_SAVING_ACCOUNT_CREATE, request_backend);
    return response.data;
  }

}

module.exports = SavingsAccountRepository;
