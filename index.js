const { writeFile, copyFile } = require('./utils/generate-site.js');

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template.js');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'generateTeam',
      message: 'Welcome! Would you like to create a Team Profile?',
      default: true
    }
  ]);
};

const promptEmployee = teamData => {
  // if there's no team array property, create one
  if (!teamData.employees) {
    teamData.employees = [];
  }

  console.log(`
  ===================
  Add an Employee
  ===================
  `);

  return inquirer.prompt([
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
      type: 'list',
      name: 'employeeRole',
      message: 'What role does this employee have within the company?',
      choices: ['Manager', 'Engineer', 'Intern'],
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
      type: 'input',
      name: 'managerOfficeNumber',
      message: "If this employee is a Manager, what is their office number?",
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "If this employee is an Engineer, what is their GitHub username?",
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "If this employee is an Intern, where do they go to school?",
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

promptUser()
  .then(promptEmployee)
  .then(teamData => {
    return generatePage(teamData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });