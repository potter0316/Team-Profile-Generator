//Connecting the lib js files
const Employee = require('./lib/employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//connecting installed npm
const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require('./src/generatePage.js');
const teamMembers = [];

//node prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Try again")
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the managers email.',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        },
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
                teamMembers.push(manager);
            console.log(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the role of the employee?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Name of the employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's ID?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "please enter your employee's github username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school was the intern a part of?',
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
        .then(employeeData => {
            // data for employee types
            let { name, id, email, role, github, school, confirm } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
    
            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
                console.log(employee);
            }

            teamMembers.push(employee);

            if (confirm) {
                return addEmployee(teamMembers);
            } else {
                return teamMembers;
            }
        })

};

//code to generate page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Success!")
        }
    })
};

promptUser()
    .then(addEmployee)
    .then(teamMembers => {
        return generatePage(teamMembers);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });