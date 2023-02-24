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
            type: 'list',
            name: 'role',
            message: "What is the role of the employee?",
            choices: ['Engineer', 'Intern']
        }
    
])
}

promptUser()