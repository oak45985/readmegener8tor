// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

const generateContributors = contributorsArr => {
  return `
    <br>
    ${contributorsArr
    .map(({ contributorName, website}) => {
      return `
        ****${contributorName}:**** [Contributor's Link](${website})
      `;
    })
    .join('<br>')}
  `;
};

module.exports = finalData => {
  const { contributors, ...data} = finalData;
  return `
    #${data.projectTitle}<br><br>

    ##Table of Contents<br>
    ### [Description](#des)
    ### [Installation](#ins)
    ### [Usage](#use)
    ### [Contributors](#con)
    ### [Questions/Contact](#que)

    ##Description

  `;
}



module.exports = generateMarkdown;
