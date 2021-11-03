const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const htmlBuilder = require('./src/html.js')

// array that will be storing all team member objects;
const employeeList = [];

// calling main function to start team building process;
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
            // inquirer creates a new Manager object using users input as parameters;
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
    // pushing new Manager object to the employeeList array;
    employeeList.push(manager);
    // calling next step;
    nextStep();
        })
};

// user will be able to choose: add intern\engineer\finish the process;
function nextStep(){
    return inquirer.prompt([
        {
            type: 'list',
            choices: ['Add an Inter', 'Add an Engineer', 'Skip'],
            name: 'teamBuild',
        },
    ])
    .then((answers) => {
        if(answers.teamBuild === 'Add an Inter'){
            addInter();
        };
        if(answers.teamBuild === 'Add an Engineer'){
            addEngineer();
        }
        if(answers.teamBuild === 'Skip'){
            // id skip option is chosen => a new html file will be generated that displays all of the users input;
            htmlBuilder.generateHtml(employeeList);
            console.log('Your Team website is successfully generated.');
    
        };
    })
};

// inquirer grabs all the info to later build an Intern object;
function addInter(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the "Intern" name?',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'Enter "Intern" ID. ',
            name: 'internID',
        },
        {
            type: 'input',
            message: 'Enter "Intern" email.',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'Enter "Intern" school.',
            name: 'internSchool',
        },
        ])
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
             // pushing new Intern object to the employeeList array;
            employeeList.push(intern);
            nextStep();
        })
};

// inquirer grabs all the info to later build an Engineer object;
function addEngineer(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the "Engineer" name?',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'Enter "Engineer" ID. ',
            name: 'engineerID',
        },
        {
            type: 'input',
            message: 'Enter "Engineer" email.',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'Enter "Engineer" gitHub username.',
            name: 'engineerGitHub',
        },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
             // pushing new Engineer object to the employeeList array;
            employeeList.push(engineer);
            nextStep();
        })
};