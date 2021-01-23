// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const axios = require("axios");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the Title for your README?",
    name: "Title",
  },
  {
    type: "input",
    message: "Describe your project",
    name: "Description",
  },
  {
    type: "input",
    message: "What is the Installation information?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What are the Usage details?",
    name: "Usage",
  },
  {
    type: "list",
    choices: ["MIT", "GNU GPL v3", "Mozilla", "IBM"],
    message: "Please choose from the following licenses",
    name: "License",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "Contributions",
  },
  {
    type: "input",
    message: "List the tests",
    name: "Tests",
  },
  {
    type: "input",
    message: "What is your Github Username?",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "Email",
  },
  {
    type: "input",
    message: "How can people contact you?",
    name: "Contact",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdownContent = generateMarkdown(data);

  fs.writeFile(fileName, markdownContent, (err) => {
    if (err) throw err;
    console.log("success");
  });
}

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then((data) => {
    axios
      .get("https://api.github.com/users/" + data.githubUsername)
      .then((response) => {
        data.profileLink = response.data.html_url;
        console.log("data from inquirer", data);
        writeToFile("README.md", data);
      });
  });
};

// // Function call to initialize app
init();
