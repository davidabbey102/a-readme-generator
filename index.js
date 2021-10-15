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
        }, {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        }, {
            type: 'input',
            message: "Project name:",
            name: 'projName',
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
            type: 'input',
            message: "Explain installation proccess in a comma seperated list:",
            name: 'installation'
        }, {
            type: 'input',
            message: "If applicable, who else contributed to this project. (Please enter in a comma seperated list):",
            name: 'contributors'
        }, {
            type: 'input',
            message: 'If your project has a lot of features, list them here. (Please enter in a comma seperated list):',
            name: 'features',
        }, {
            type: "list",
            message: "Chose the appropriate license for this project: ",
            name: "license",
            choices: ["Apache", "GNU", "MIT", "ISC", "Mozilla", "Open"],
        },
    ])

    //populate readme with answers
    .then((ans) => {
        console.log(ans.contributors)
        writeReadMe(ans)
        fs.writeFile(`./assets/created-json/${ans.userName}.json`, JSON.stringify(ans, null, 4), (err) =>
            err ? console.error(err) : console.log(' '))
    })


// create the readme based on answers

function writeReadMe(ans) {
    //function used variables
    let readMeTitle
    let readMeDescription
    let tableOfContents
    let installation = []
    let usage
    let credits = []
    let license
    let features
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
    const contactTOC = '## Contact'


    //full readme array
    let fullReadMe = []

    //Title
    readMeTitle = `# ${ans.projName}\n`
    fullReadMe.push(readMeTitle)

    //license badge
    let badge = `${badgesTOC}\n![](https://img.shields.io/badge/License-${ans.license}%20-blue.svg)`
    fullReadMe.push(badge)

    //Description
    readMeDescription = `${descriptionTOC}\n${ans.description}\n*${ans.motivation}`
    fullReadMe.push(readMeDescription)

    //Table of contents
    tableOfContents = `${tableOfContentsTOC}\n* [Installation](#installation)\n* [Usage](#usage)\n* [Credits](#credits)\n* [Features](#features)\n* [Contribute](#contribute)\n* [Contact](#contact)`
    fullReadMe.push(tableOfContents)

    //Installation instructions
    fullReadMe.push(installationTOC)
    if (ans.installation == "") {
        installation = '\nNo special installation directions required.\n'
        fullReadMe.push(installation)
    } else {
        installation = ans.installation.split(',').map(item => {
            return `${item.trim()}`
        })
        for (let i = 0; i < installation.length; i++) {
            fullReadMe.push(`${i + 1}. ${installation[i]}`)
        }
    }

    //usage explanation
    if (ans.intention == "") {
        usage = `\n${usageTOC}\n Explain how to use your project here.\n`
    } else {
        usage = `\n${usageTOC}\n ${ans.intention}\n`
        // ![](./assets/images/screenshot1.png)\n
        // ![](./assets/images/screenshot2.png)\n
        // ![](./assets/images/screenshot3.png)\n
        // ![](./assets/images/screenshot4.png)\n
    
    }
    fullReadMe.push(usage)

    //if applicable, adds list of contributors
    fullReadMe.push(creditTOC)
    if (ans.contributors == '') {
        credits = `\n${ans.userName} was the only contributor.\n`
        fullReadMe.push(credits)
    } else {
        credits = ans.contributors.split(',').map(item => {
            return `${item.trim()}`
        })
        credits.push(`${ans.userName}`)
        for (let i = 0; i < credits.length; i++) {
            fullReadMe.push(`${i + 1}. ${credits[i]}`)
        }
    }

    //Features, if any, population
    fullReadMe.push(`${featuresTOC}`)
    if (ans.features == '') {
        features = '\nThis project is straight forward and its features are self evident.'
        fullReadMe.push(features)
    } else {
        features = ans.features.split(',').map(item => {
            return `${item.trim()}`
        })
        for (let i = 0; i < features.length; i++) {
            fullReadMe.push(`${i + 1}. ${features[i]}`)
        }
    }

    //Licensing information
    license = `\n${licenseTOC}\n\n This project is protected by ${ans.license}.\n`
    fullReadMe.push(license)

    //How to contribute

    //Any tests

    //Contacting the originator of the readme
    contact = `\n\n${contactTOC}\nAny questions or comments may be directed to me by [email](${ans.email}). Or on my [GitHub page](https://github.com/${ans.userName}).`
    fullReadMe.push(contact)

    //put fullReadMe together based on \n

    const README = fullReadMe.join('\n')

    //Create the readme
    fs.writeFile(`./assets/generated-readme/readme-${ans.userName}.md`, README, (err => {
        if (err)
            throw err
        console.log('ReadMe successfully generated')
    }))
}

