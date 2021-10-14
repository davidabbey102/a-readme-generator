//Constants and required resources
const fs = require('fs')
const inquirer = require('inquirer');
// {userName, email, projName, description, motivation, intention, problemSolver, standOut, license}

//response validation


//Questions to ask to populate readme
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'userName',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter GitHub unsername.")
                }
            }
        }, {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter an email address.")
                }
            }
        }, {
            type: 'input',
            message: "Project name:",
            name: 'projName',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter the project's name.")
                }
            }
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
            choices: ["Apache", "GNU", "MIT", "ISC", "Mozilla", "Open"],
        },{
            type: 'input',
            message: "Explain installation proccess in a comma seperated list.",
            name: 'installation'
        },{
            type: 'input',
            message: "If applicable, who else contributed to this project. (Please enter in a comma seperated list)",
            name: 'installation'
        },

        // userName email projName description motivation intention problemSolver description license

         
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
    .then(ans => {
        console.log(answers)
        fs.writeFile(`${answers.userName}.json`, JSON.stringify(answers, null, 4), function (err) {
            if (err) {
                throw err
            }
        })
    })

// create the readme based on answers

function createReadMe(ans) {
    //function used variables
    let readMeTitle
    let readMeDescription
    let tableOfContents
    let installation = []
    let usage
    let credits
    let license
    let features
    let contribute
    let tests
    let contact

    //Section and table of contents references & headers
    const descriptionTOC = '## Description'
    const tableOfContentsTOC = '## Table of Contents'
    const installationTOC = '## Installation'
    const usageTOC = '## Usage'
    const creditTOC = '## Credits'
    const licenseTOC = "## License"
    const badgesTOC = '## Badges'
    const featuresTOC = '## Features'
    const contributeTOC = '## How to Contribute'
    const testsTOC = '## Tests'
    const contactTOC = '## Contact Me'


    //full readme array
    let fullReadMe = []

    //Title
    readMeTitle = `# ${ans.projName}`
    fullReadMe.push(readMeTitle)

    //license badge
    let badge = `${bagesTOC}\n![](https://img.shields.io/badge/License-${ans.license}%20-blue.svg)`
    fullReadMe.push(badge)

    //Description
    readMeDescription = `${descriptionTOC}\n${ans.description}`
    fullReadMe.push(readMeDescription)

    //Table of contents
    tableOfContents = `${tableOfContentsTOC}\n [Installation](#installation)\n [Usage](#usage)\n [Credits](#credits)\n [Features](#features)\n[Contribute](#contribute)\n[Tests](#tests)[Contact](#contact)`
    fullReadMe.push(tableOfContents)

    //Installation instructions
    fullReadMe.push(installationTOC)
    if (ans.installation == "") {
        installation = 'No special installation directions.'
    } else {
        installation = ans.installation.replace(' , ', '\n')
    }
    fullReadMe.push(installation)

    //usage
    if (ans.intention == "") {
        usage = `${usageTOC}\n Explain how to use your project here.`
    } else {
        usage = `${usageTOC}\n ${ans.intention}`
        ```md
    ![alt text](assets/images/screenshot1.png)
    ![alt text](assets/images/screenshot2.png)
    ```
    }

    //if applicable 

}