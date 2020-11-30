const Employee = require('./Employee');

class Manager {
  constructor(name = '') {
    this.name = name;
  }
}

module.exports = Manager;