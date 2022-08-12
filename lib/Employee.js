// code to define and export manager class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = "Employee";

    //get method
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }

  getId() {
    return this.id;
  }
  getRole() {
    return this.role;
  }
}

//export module
module.exports = Employee;
