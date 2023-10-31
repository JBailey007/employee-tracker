const mysql = require("mysql2");
const inquirer = require("inquirer");

// Connection to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Dx12ry",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);
//Connects to the DB and runs the application
createConnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  mainPrompt();
});

//Main Prompt
function mainPrompt() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "tasks",
      choices: [
        "View all Departments",
        "Add new Department",
        "View all Roles",
        "Add new Role",
        "View all Employees",
        "Add new Employee",
        "Update Employee Role",
        "End",
      ],
    })
    .then(function ({ task }) {
      switch (task) {
        case "View all Departments":
          viewAllDepartments();
          break;

        case "Add new Department":
          addDepartment();
          break;

        case "View all Roles":
          viewRoles();
          break;

        case "Add new Role":
          addRole();
          break;

        case "View all Employees":
          viewEmployee();
          break;

        case "Add new Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "End":
          createConnection.end();
          break;
      }
    });
}

function promptViewAllDepartments(departmentOptions) {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which department would you like to choose?",
        name: "departmentId",
        choices: departmentOptions,
      },
    ])
    .then(function (answer) {
      console.log("answer ", answer.departmentId);

      const query = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department
    FROM employee e
    JOIN role r 
    ON e.role_id = r.id
    JOIN department d
    ON d.id =r.department_id
    WHERE d.id =?`;

      createConnection.query(query, answer.departmentId, function (err, res) {
        if (err) throw err;

        console.table("response ", res);
        console.log(res.affectedRows + "Employees are shown!");

        mainPrompt;
      });
    });
}
