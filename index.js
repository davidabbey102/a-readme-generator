//Constants and required resources
const fs = require('fs')
const inquirer = require('inquirer');

//Questions to ask to populate readme
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName',
    }, {
        type: 'input',
        message: "Project name",
        name: 'projName'
    }, {
        type: 'input',
        message: 'Briefly describe your project',
        name: 'description',
    }, {
        type: 'input',
        message: 'What was your motivation?',
        name: 'motivation',
    }, {
        type: 'input',
        message: "What is the intended use for your project?",
        name: "intention",
    }, {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problemSolver',
    }, {
        type: 'input',
        message: "What did you learn?",
        name: 'learned'
    }, {
        type: 'input',
        message: 'What makes your project stand out?',
        name: 'description',
    }, {
        type: "list",
        message: "Chose the appropriate license for this project: ",
        name: "license",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ],
    }, 
    
    // {
    //     type: 'input',
    //     message: "Project name",
    //     name: 'projName'
    // }, {
    //     type: 'input',
    //     message: 'Briefly describe your project',
    //     name: 'description',
    // }, {
    //     type: 'input',
    //     message: "What is the intended use for your project?",
    //     name: "motivation",
    // }, {
    //     type: 'input',
    //     message: 'what is your preferred method of communication?',
    //     name: 'preferCommType',
    //     choices: ['Phone', new inquirer.Separator(), 'Text', new inquirer.Separator(), 'Email', new inquirer.Separator(), 'Fax']
    // },
])

    //populate readme with answers
    .then(answers => {
        console.log(answers)
        console.log(`Welcome ${answers.name}, of the languages you listed, ${answers.languages}, we prefer to communicate in ${answers.preferCommType}, too`)
        fs.writeFile(`${answers.name}.json`, JSON.stringify(answers), function (err) {
            if (err) {
                throw err
            }
        })
    })


