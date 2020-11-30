let teamName;

const generateEmployees = employeesArr => {
  return `
  ${employeesArr
      .map(({ employeeName, employeeID, employeeEmail, employeeRole, managerOfficeNumber, engineerGithub, internSchool }) => {
        return `
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${employeeName}, ${employeeRole}
          </span>
            <ul class="collection teal-text">
              <li class="collection-item">ID: ${employeeID}</li>
              <li class="collection-item">Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a></li>
              <li class="collection-item">Office Number (Manager Only): ${managerOfficeNumber}</li>
              <li class="collection-item">GitHub Username (Engineer Only): <a href="https://github.com/${engineerGithub}" target="_blank">${engineerGithub}</a></li>
              <li class="collection-item">School (Intern Only): ${internSchool}</li>

            </ul>
          </div>
          </div>
        `;
      })
      .join('')}
    `;
};



module.exports = templateData => {
  // destructure employees and header data from templateData based on property key names
  const { employees, ...teamName } = templateData;


  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <nav>
       <div class="nav-wrapper teal lighten-2">
          <a href="#" class="brand-logo center">My Team</a>
        </div>
    </nav>
    <main>
      <div class="row">
          <div class="col s12 m6">      
          ${generateEmployees(employees)}
          </div>
      </div>
    </main>
    <footer class="page-footer teal lighten-2">
      <div class="footer-copyright">
        <div class="container">
        © 2020 Moon, Ink
        </div>
      </div>
    </footer>
  </body>
  </html>
  `;
};