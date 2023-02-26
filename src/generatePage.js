const generateManager = function (manager) {
    return `
    <div>
        <div>
            <p>Manager</p>
        </div>

        <div>
            <h5>${manager.name}</h5>
            <p>
            <p class="id">ID:${manager.id}</p>
            <p class="email">Email:<ahref="mailto:${manager.email}">${manager.email}</a></p>
            <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
            </p>
        </div>
    </div>
    `
}

// Engineer card
 const generateEngineer = function (engineer) {
    return `
    <div>
        <div>
            <p>Engineer</p>
        </div>
        
        <div>
            <h5>${engineer.name}</h5>
            <p>
            <p>ID: ${engineer.id}</p>
            <p class="email>Email:<ahref="mailto:${engineer.email}">${engineer.email}</a?></p>
            <p class="github">Github:<ahref="https://github.com/${engineer.github}"</a></p>
            </p>
            </div>
            `
};

// intern card
const generateIntern = function (intern) {
    return `
    <div>
        <div>
            <p>Intern</p>
        </div>
        
        <div>
            <h5>${intern.name}</h5>
            <p>
            <p>ID: ${intern.id}</p>
            <p class="email>Email:<ahref="mailto:${intern.email}">${intern.email}</a?></p>
            <p class="github">Github:<ahref="https://github.com/${intern.github}"</a></p>
            </p>
            </div>
            `
};

generatePage = (data) => {
     // array for cards 
     teamArray = []; 

     for (let i = 0; i < data.length; i++) {
         const employee = data[i];
         const role = employee.getRole(); 
 
         if (role === 'Manager') {
             const managerCard = generateManager(employee);
 
             teamArray.push(managerCard);
         }
 
         if (role === 'Engineer') {
             const engineerCard = generateEngineer(employee);
 
             teamArray.push(engineerCard);
         }
 
         if (role === 'Intern') {
             const internCard = generateIntern(employee);
 
             teamArray.push(internCard);
         }
 
     }
 
     const employeeCards = teamArray.join('')
 
     // return to generated page
     generateTeam = generateHTML(employeeCards); 
     return employeeCards;
 
 
 }
 
 // generate html page 
const generateHTML = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    />
    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text"
          >Team Profile</span
        >
      </nav>
    </header>

    <main>
      <div class="container">
        <div class="row" id="team-cards"></div>
        ${employeeCards}
      </div>
    </main>
  </body>
</html>
    `;
}


module.exports = generatePage;