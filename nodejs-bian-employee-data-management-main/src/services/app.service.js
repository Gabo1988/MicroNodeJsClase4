const EmployeeDataManagementRepository = require("../repositories/app.repository");
const employeeDataManagementRepository = new EmployeeDataManagementRepository()

class EmployeeDataManagementService {

  async getPersonalInformation(request_ms) {

    //transformation BIAN -> no BIAN
    const request_backend = {
      documentType: request_ms.RetrievePersonalInformation.Person.PersonIdentification.TypeOfIdentification,
      documentNumber: request_ms.RetrievePersonalInformation.Person.PersonIdentification.IdentityCardNumber
    };


    const response_backend = await employeeDataManagementRepository.getPersonalInformation(request_backend);

    //transformation no BIAN -> BIAN
    const response_ms = {
      RetrievePersonalInformationResponse: {
        Person: {
          PersonIdentification: {
            TypeOfIdentification: response_backend.documentType,
            IdentityCardNumber: response_backend.documentNumber,
            PersonName: {
              GivenName: response_backend.firstName,
              MiddleName: response_backend.lastName
            },
            Contact: {
              MobilePhoneNumber: response_backend.phone,
              PersonalEmailAddress: response_backend.email
            }
          }
        }
      }
    };

    return response_ms;

  }

}

module.exports = EmployeeDataManagementService;
