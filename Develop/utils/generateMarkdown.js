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
  return `
  # ${data.Title}\n
 ## Description \n
 ${data.Description}\n 
 
---
| Table of Contents |
|---|
| [Installation](#Installation) |
| [Usage](#Usage) |
| [Licence](#Licence) |
| [Contributions](#Contributions) |
| [Tests](#Tests) |
| [Questions](#Questions) |
---

## Installation \n
${data.Installation}\n
## Usage \n
${data.Usage}\n
## Licence \n
${data.Licence}\n
## Contributions \n
${data.Contributing}\n
## Tests \n
${data.Tests}\n
## Questions
* ${data.Question4}
* Github Username - ${data.Question1}
* Github Profile - ${data.Question2}
* Email - ${data.Question3} 
`;
}

module.exports = generateMarkdown;
