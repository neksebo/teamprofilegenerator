const Employee = require("./Employee.js");
// code to define and export manager class

//manager  class inheriting employee attributes
class Manager extends Employee {
  constructor(name, id, email, phoneNumber) {
    super(name, id, email);
    this.phoneNumber = phoneNumber;
    this.role = "Manager";
  }
  getphoneNumber() {
    return this.phoneNumber;
  }
}

module.exports = Manager;
