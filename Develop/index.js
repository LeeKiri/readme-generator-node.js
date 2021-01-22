// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the Title for your README?",
    name: "Title",
  },
  // {
  //   type: "input",
  //   message: "Describe your project",
  //   name: "Description",
  // },
  // {
  //   type: "input",
  //   message: "What is the Installation information?",
  //   name: "Installation",
  // },
  // {
  //   type: "input",
  //   message: "What are the Usage details?",
  //   name: "Usage",
  // },
  // {
  //   type: "input",
  //   message: "Choose a licence for this application?",
  //   name: "licence",
  // },
  // {
  //   type: "input",
  //   message: "What are the contribution guidelines?",
  //   name: "Contribution",
  // },
  // {
  //   type: "input",
  //   message: "List the tests",
  //   name: "Tests",
  // },
  // {
  //   type: "input",
  //   message: "What is your Github Username and the link to your profile?",
  //   name: "Question1",
  // },
  // {
  //   type: "input",
  //   message: "What is the link to your Github profile?",
  //   name: "Question2",
  // },
  // {
  //   type: "input",
  //   message: "What is your email?",
  //   name: "Question3",
  // },
  // {
  //   type: "input",
  //   message: "How can people reach you with questions?",
  //   name: "Question4",
  // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdownContent = generateMarkdown(data)
  
  fs.writeFile(fileName, markdownContent, (err) => {
    if (err) throw err;
    console.log("success");
  });
}

// TODO: Create a function to initialize app
const init = () => {
inquirer
.prompt(questions)
.then((data) => {
  console.log("data from inquirer", data);
  writeToFile('README.md', data)
});
}

// // Function call to initialize app
init();
