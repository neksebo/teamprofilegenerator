const Employee = require("./Employee.js");
// code to define and export manager class

//Intern  class inheriting employee attributes
class Intern extends Employee {
  constructor(name, id, email, github, school) {
    super(name, id, email);
    this.github = github;
    this.role = "Intern";
    this.school = school;
  }

  getGithub() {
    return this.github;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
