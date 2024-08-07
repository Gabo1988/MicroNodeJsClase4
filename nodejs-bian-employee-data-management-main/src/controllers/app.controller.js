const SavingsAccountService = require('../services/app.service');
const savingsAccountService = new SavingsAccountService()

class SavingsAccountController {
  
  async getSavingAccount(request_ms) {
    try {
      // Llamada al servicio
      const data = await savingsAccountService.getSavingAccount(request_ms);
      return data;
    } catch (error) {
      console.error('Error en getSavingAccount:', error);
      throw new Error('Error al obtener la información de cuentas de ahorro');
    }
  }

  async getCreateSavingAccount(request_ms) {
    try {
      // Llamada al servicio
      const data = await savingsAccountService.getCreateSavingAccount(request_ms);
      return data;
    } catch (error) {
      console.error('Error en getCreateSavingAccount:', error);
      throw new Error('Error al crear la cuenta de ahorro');
    }
  }
  
}

module.exports = SavingsAccountController;
