//Connecting the lib js files
const Employee = require('./lib/employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//connecting installed npm
const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require('./src/generate-profile.js');
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
    ])
        .then(employeeData => {
            // data for employee types
            let { name, id, email, role, github, school, } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
    
            } else if (role === "Intern") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            }

            teamMembers.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamMembers);
            } else {
                return teamMembers;
            }
        })

};

promptUser()