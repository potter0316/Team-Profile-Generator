//Connecting the lib js files
const Employee = require('./lib/employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//connecting installed npm
const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require

//node prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        }
        {
            type: 'input',
            name: 'id',
            message: 'Whate is your ID number?'
        }
    ])
}