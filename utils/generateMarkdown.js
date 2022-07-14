// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'APACHE 2.0':
      response = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      response = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      response = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      response = ' '
      break
  }
return response
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      response = '[MIT](https://opensource.org/licenses/MIT)';
      break;
    case 'APACHE 2.0':
      response = '[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      response = '[GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      response = '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      response = ' '
      break
  }
return response
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    response = 'There is no license used in this project'
  }else{
    response = `This project is licensed under the ${renderLicenseLink(license)} license.`
  }
  return response
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#howtocontribute)
  - [Tests](#tests)
  ## Installation
  ${data.install}
  ## Usage
  ${data.use}
  ## License
  ${renderLicenseSection(data.license)}
  ## How to Contribute
  ${data.contribute}
  ## Tests
  ${data.run}
  ## Question
  - If you have any questions, please email me at ${data.email}
  - GitHub Username: ${data.github}
`;
}

module.exports = generateMarkdown;
