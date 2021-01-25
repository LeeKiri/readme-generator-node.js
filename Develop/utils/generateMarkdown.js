// TODO: Create a function that returns a license badge based on which license is passed in
let license = "";
const getLicense = (data) => {
  switch (data.license) {
    case "MIT":
      license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GNU GPL v3":
      license =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Mozilla":
      license =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "IBM":
      license =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "The Apache License":
      license =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD":
      license =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "EPL":
      license =
      "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    default:
      license = "No License";
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  getLicense(data);

  return `# ${license}\n
  # ${data.Title}\n
 ## Description \n
 ${data.Description}\n 
 
---
| Table of Contents |
|---|
| [Installation](#Installation) |
| [Usage](#Usage) |
| [License](#License) |
| [Contributions](#Contributions) |
| [Tests](#Tests) |
| [Questions](#Questions) |
---

## Installation \n
${data.Installation}\n
## Usage \n
${data.Usage}\n
## License \n
${license}\n
## Contributions \n
${data.Contributions}\n
## Tests \n
${data.Tests}\n
## Questions
* You can contact us via ${data.Contact}
* Github Username - ${data.githubUsername}
* Github Profile - ${data.profileLink}
* Email - ${data.Email} 
`;
};

module.exports = generateMarkdown;
