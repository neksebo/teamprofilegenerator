const Employee = require("./Employee.js");
// code to define and export engineer class

//Engineer  class inheriting employee attributes
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

//export module
module.exports = Engineer;
