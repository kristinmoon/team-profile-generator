const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const promptEmployee = teamData => {
  // if there's no team array property, create one
  if (!teamData.employees) {
    teamData.employees = [];
  }

  console.log(`
  ===================
  Add a New Employee
  ===================
  `);

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'employeeName',
        message: "Please enter your employee's name: (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name.');
          }
        }
      },
      {
        type: 'input',
        name: 'employeeID',
        message: "Please enter your employee's ID: (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter an ID.');
          }
        }
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: "Please enter your employee's email address: (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter an email address.');
          }
        }
      },
      {
        type: 'list',
        name: 'employeeRole',
        message: 'What role does this employee have within the company?',
        choices: ['Manager', 'Engineer', 'Intern'],
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
      }
    ])
    .then(employeeData => {
      teamData.employees.push(employeeData);
      if (employeeData.confirmAddEmployee) {
        return promptEmployee(teamData);
      } else {
        return teamData;
      }
    });
};

promptEmployee();