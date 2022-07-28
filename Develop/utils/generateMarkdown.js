// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const choices = [
    {
      name: "Apache", 
      site: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }, 

  ];

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateContributors = contributorsArr => {
  return `
    ${contributorsArr
    .map(({ contributorName, website}) => {
      return `${contributorName}: <a href="${website}">${contributorName}</a>
      `;
    })
    .join('<br>')}
  `;
};

module.exports = finalData => {
  const { contributors, license, ...data} = finalData;
  return `
# ${data.projectTitle}

LICENSE DATA

## Table of Contents
### [Description](#des)
### [Installation](#ins)
### [Usage](#use)
### [Contributors](#con)
### [Questions/Contact](#que)<br><br>

## <a name="des">Description</a>
<p> ${data.description} </p><br>


## <a name="ins">Installation</a>
<p> ${data.installation} </p><br>


## <a name="use">Usage</a>
<p> ${data.usage} </p><br>


## <a name="con">Contributors</a>
<p> ${generateContributors(contributors)} </p><br>


## <a name="que">Questions/Contact</a>
<p> For further questions, needs, or policies on contributions, please visit the owner's <a href="https://github.com/${data.github}">GitHub</a> page or contact them at: <a href="mailto:${data.email}">${data.email}</a>.</p>
`;
}



// module.exports = generateMarkdown;
