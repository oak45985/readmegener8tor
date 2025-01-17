// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');
const { writeFile } = require('./src/writeMarkdown');

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
            choices: ["Apache", "GNUGPLv3", "MIT", "ISC", "No License"]
         },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GH Username!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email.");
                    return false;
                }
            }
        }
    ]);

};

const promptContributor = finalData => {
    console.log(`Enter Contributors`);

    if (!finalData.contributors) {
        finalData.contributors = [];
    }
        return inquirer
        .prompt([
            {
                type:"input",
                name:"contributorName",
                message: "What's the name of a contributor?",
                validate: contributorInput => {
                    if (contributorInput) {
                        return true;
                    } else {
                        console.log("Please enter a contributor name");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "website",
                message: "Please insert the link of your contributor (Required)",
                validate: websiteInput => {
                    if (websiteInput) {
                        return true;
                    } else {
                        console.log("You must enter your contributor's webpage");
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                name:"confirmAddContributor",
                message: "Would you like to enter another contributor?",
                default: false
            }
        ])
        .then(contributorData => {
            finalData.contributors.push(contributorData);
        if (contributorData.confirmAddContributor) {
            return promptContributor(finalData);
        } else {
            return finalData;
        }
    });
};

readMeData()
    .then(promptContributor)
    .then(finalData => {
        return generateReadMe(finalData);
    })
    .then(writeMarkDown => {
        return writeFile(writeMarkDown);
    })
    .catch(err => {
        console.log(err);
    })