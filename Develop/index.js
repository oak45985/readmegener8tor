// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const readMeData = () => {
    return inquirer.prompt([
        {
            type:"input",
            name: "projectTitle",
            message: "What is your project title (required)?",
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log("Please enter your project title.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description of your project (required).",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please provide a description of your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide a quick installiton how-to of your project (required).",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("Please provide an installation how-to of your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide a quick example of how to use the project (required).",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please provide an example how to use your project.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Please choose the license for this project.",
            choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC License"]
         },
         {
            type: "input",
            name: "usage",
            message: "Please provide a quick example of how to use the project (required).",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please provide an example how to use your project.");
                    return false;
                }
            }
         }
    ])

}
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
