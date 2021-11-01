const inquirer = require('inquirer');
const Manager = require('./lib/Manager')

const employeeList = [];

addManager();

function addManager(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the "Team Manager" name?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'Enter "Team Manager" ID. ',
            name: 'managerID',
        },
        {
            type: 'input',
            message: 'Enter "Team Manager" email.',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'Enter "Team Manager" office number.',
            name: 'managerOfficeNumber',
        },
        ])
        .then((answers) =>{
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
    employeeList.push(manager);
    console.log(employeeList);
        })
}