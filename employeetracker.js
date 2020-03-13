  
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// MYSQL Connection

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password1234",
  database: "employee_trackerDB"
});


 // Connecting to main prompt
connection.connect(function(err) {
  if (err) throw err;
  mainPrompt();
});

// Main prompt--
function mainPrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Welcome to the Official EmployeeTracker Express App! What would you like to do?",
      choices: [
        "Add Employee",
        "View All Employees",
        "View All Departments",
        "View All Managers",
        "View All Roles",
        "Update Employee Role",
        "Update Employee Manager",
        "Remove Employee",
        "Quit"
      ]

// List of actions      

    }).then(function(answer) {
      switch (answer.action) {

        case "Add Employee":
          addEmployee();
          break;
  
        case "View All Employees":
          viewEmployees();
          break;
  
        case "View All Departments":
          viewDepartments();
          break;
  
        case "View All Managers":
          viewManagers();
          break;

        case "View All Roles":
          viewRoles();
          break;
  
        case "Update Employee Role":
          updateRole();
          break;
  
        case "Quit":
          endApp();
          break;
   }
  })
}
// Prompt to Add Employee 


function addEmployee() {
  connection.query("SELECT * FROM role", function (err, res) {
  if (err) throw err;
  
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input", 
        message: "Employee's first name: ",
      },
      {
        name: "last_name",
        type: "input", 
        message: "Employee's last name: "
      },
      {
        name: "role", 
        type: "list",
        choices: function() {
        let roleArray = [];
          for (let i = 0; i < res.length; i++) {
              roleArray.push(res[i].title);
          }
            return roleArray;
          },
              message: "What is this employee's role? "
        }
        ]).then(function(answer) {
          let roleID; 
            for (let j = 0; j < res.length; j++) {
              if (res[j].title == answer.role) {
                  roleID = res[j].id;
                  console.log(roleID)
              }                  
              }  
              connection.query(
              "INSERT INTO employees SET ?",
              {
                  first_name: answer.first_name,
                  last_name: answer.last_name,
                  role_id: roleID,
              },
              function (err) {
                  if (err) throw err;
                  console.log("Your employee has been added!");
                  addEmployee();
                  mainPrompt();
})
}) 
})}


// Update Employee Role

function updateRole() {
  connection.query("SELECT * FROM role", function (err, rolesData) {
  connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
  inquirer
    .prompt([
      {
        name: "employees",
        type: "rawlist",
        message: "Which employee's role would you like to update?",
        choices: function () {
          console.log(res);
          let employeeArray = [];
          for (let i = 0; i < res.length; i++) {
              
              employeeArray.push(res[i].first_name+ " " + res[i].last_name);
              
            }
            // console.log(employeeArray)
         return employeeArray; 
        }
      },
      {
        name: "newRole",
        type: "rawlist", 
        message: "Which role would you like to update?",
        choices: function () {

              let roleChoices = [];
                for (let i = 0; i < rolesData.length; i++) {
                roleChoices.push(rolesData[i].title);
            }
              return roleChoices;     
        }}
    ]).then(function(answer) {

          let newRole = [];
          for (let i = 0; i < rolesData.length; i++) {
            if (rolesData[i].title == answer.newRole) {
              answer.newRole = rolesData[i];
            }
          }  

          for (let i = 0; i < res.length; i++) {
              if ((res[i].first_name+ " " + res[i].last_name) == answer.employees) {
                  answer.employees = res[i];
              }
            }  

            

              connection.query(
              "UPDATE employees SET ? WHERE ?",
              [{
                role_id: answer.newRole.id

              },{
                id: answer.employees.id

              }],
              function (err) {
                    if (err) throw err;
                  console.log("Your employee's role has been updated!");
                  //updateRole();
                 // mainPrompt();
                 connection.end();

              })
            
    
  })
});
 })
 }


// MYSQL Connection - Function to View All Employees

function viewEmployees() {
  let queryTable = "SELECT * FROM employees"; 
  console.log(queryTable) 
  connection.query(queryTable, function(err, res) {
  if (err) throw err;
  console.table(res);
  
  mainPrompt(); 
  
})
}


// MYSQL Connection - Function to View Departments 

function viewDepartments() {
  let queryTable = "SELECT * FROM department";
  console.log(queryTable)
  connection.query(queryTable, function(err, res) {
  console.table(res)
  if(err)throw err;

  mainPrompt();

  })
}

// MYSQL Connection - Function to View Roles

function viewRoles() {
  let queryTable = "SELECT * FROM role";
  console.log(queryTable)
  connection.query(queryTable, function(err, res){
  console.table(res);  
  if (err) throw err;

  mainPrompt(); 
  
  })
}

function viewManagers() {
  let queryTable = "SELECT * FROM managers"; 
  console.log(queryTable) 
  connection.query(queryTable, function(err, res) {

  console.table(res)
  if (err) throw err;

  mainPrompt(); 
  
})
}


function endApp() {
  connection.end();
}
