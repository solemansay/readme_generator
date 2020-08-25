var inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
var fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown")


inquirer.prompt([

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description about your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "dependencies"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using this repo?",
        name: "using"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    },

]).then(answers => {
    console.log(answers);
    var link = ""
    if (answers.license === "MIT") {
        link = "![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)"
    } else if (answers.license === "GPL 3.0") {
        link = "![GitHub license](https://img.shields.io/badge/eclipse-GPL3.0-marketplace.svg)"
    } else if (answers.license === "BSD 3") {
        link = "![GitHub license](https://img.shields.io/badge/eclipse-BSD3-marketplace.svg)"
    } else {
        link = ""
    }

    var data = {
        username: answers.username,
        email: answers.email,
        title: answers.title,
        description: answers.description,
        license: answers.license,
        link: link,
        dependencies: answers.dependencies,
        tests: answers.tests,
        using: answers.using,
        contributing: answers.contributing
    }

    writeToFile("README.md", data);

});


// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("README.md", generateMarkdown(data), err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

