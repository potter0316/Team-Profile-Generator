//Connecting the lib js files
const Employee = require('./lib/employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//connecting installed npm
const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require('./src/generate-html.js');
const teamMembers = [];

//node prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the managers email.',
        },
        {
            type: 'input',
            name: 'officenumber',
            message: "Please enter the manager's office number.",
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add an additional team member?',
        }
    ])
};

const addEmployee = () => {
    return inquirer.prompt ([
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
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email?",
        },
        { 
            type: 'input',
            name: 'github',
            message: "please enter your employee's github username",
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school was the intern a part of?',
        },
        .then(teamData => {
            // data for employee types 
            if (teamData.role === "Engineer") {
                const  { name, id, email, github } = teamData; 
                const engineer = new Engineer (name, id, email, github);
    
                teamMembers.push(engineer); 
                console.log(engineer);
    
            } else {
                const  { name, id, email, school } = teamData; 
                const intern = new Intern (name, id, email, school);
    
                teamMembers.push(intern);
                console.log(intern);
    
        }
            if (teamData.confirmAddEmployee) {
                return addEmployee(teamMembers); 
            } else {
                return teamMembers; 
            }
        })
    
      
])
}

promptUser()