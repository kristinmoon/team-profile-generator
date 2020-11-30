let teamName;

// create header
const generateHeader = teamName => {
  JSON.stringify(teamName)
  if (!teamName) {
    return 'My Team';
  }

  return `
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">${teamName}</a>
    </div>
    `;
};

const generateEmployees = employeesArr => {
  return `
  ${employeesArr
      .map(({ employeeName, employeeID, employeeEmail, employeeRole }) => {
        return `
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${employeeName}, ${employeeRole}
          </span>
            <ul class="collection teal-text">
              <li class="collection-item">ID: ${employeeID}</li>
              <li class="collection-item">Email: ${employeeEmail}</li>
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
      ${generateHeader(teamName)}
    </nav>
    <main>
      <div class="row">
          <div class="col s12 m6">      
          ${generateEmployees(employees)}
          </div>
      </div>
    </main>
    <footer class="page-footer">
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