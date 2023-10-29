const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "Which department would you like to add?",
    name: "department",
    choices: "text",
  },
  {
    type: "input",
    message: "Which role would you like to add?",
    name: "role",
  },
  {
    type: "input",
    message: "Which employee would you like to add?",
    name: "employee",
  },
  {
    type: "list",
    message: "Select Employee",
    name: "edit_employee",
    choices: []
  },
];

function writeToFile(fileName, data) {
  var content = companyRecord(data);
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("Company Record added/updated");
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
//    need to make sure that this is connected in the right spot. 
    var fileName = "Company DB"; 
    writeToFile(fileName, data);
  });
}

init();