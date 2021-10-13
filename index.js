//Constants and required resources
const fs = require('fs')
const {userName, email, projName, description, motivation, intention, problemSolver, standOut, license} = require('inquirer');

//Questions to ask to populate readme
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName',
    }, {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }, {
        type: 'input',
        message: "Project name:",
        name: 'projName'
    }, {
        type: 'input',
        message: 'Briefly describe your project:',
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
        name: 'standOut',
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

    // userName email projName description motivation intention problemSolver description license

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
        fs.writeFile(`${answers.userName}.json`, JSON.stringify(answers,null,4), function (err) {
            if (err) {
                throw err
            }
        })
    })

    create

