const SavingsAccountRepository = require("../repositories/app.repository");
const savingsAccountRepository = new SavingsAccountRepository()

class SavingsAccountService {

  async getSavingAccount(request_ms) {

    //transformation BIAN -> no BIAN
    const request_backend = {
      numero_cuenta: request_ms.Account.Identification
    };

    const response_backend = await savingsAccountRepository.getSavingAccount(request_backend);

    //transformation no BIAN -> BIAN
    const response_ms = {
      RetrieveResponse: {
        Account: {
          Identification: response_backend.numero_cuenta,
          BaseCurrency: response_backend.tipo_moneda_cuenta,
          Status: response_backend.estado_cuenta,
          Type: response_backend.tipo_cuenta
        }
      }
    };

    return response_ms;

  }

  async getCreateSavingAccount(request_ms) {

    //transformation BIAN -> no BIAN
    const request_backend = {
      tipo_documento: request_ms.PersonIdentification.TypeOfIdentification,
      numero_documento: request_ms.PersonIdentification.IdentityCardNumber
    };

    const response_backend = await savingsAccountRepository.getCreateSavingAccount(request_backend);

    //transformation no BIAN -> BIAN
    const response_ms = {
      InitiateResponse: {
        Account: {
          Identification: response_backend.id_cuenta,
          BaseCurrency: response_backend.tipo_moneda
        }
      }
    };

    return response_ms;

  }

}

module.exports = SavingsAccountService;
