var inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const connection = require('./connections');

//Read acceptance criteria and match options, then make sql, the call it at .then spot

const questions = () => {

  inquirer.prompt(
    [{
        type: "list",
        name: "choice",
        message: "What would you like to do(Press <enter> to select)",
        choices: ["View departments", "View roles", "View employees", "Add departments", "Add roles", "Add employees", "Update employee roles"]
      }

    ]).then(data => {

      let displayDB = data.choice;
      console.log(displayDB);

      function options(displayDB) {
        class DB {
          // Keeping a reference to the connection on the class in case we need it later
          constructor(connection) {
            this.connection = connection;
          }

          // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
          findAllDepartments() {
            return this.connection.query(
              //  "USE Employees",
              "SELECT * FROM Department;"
            );
          };
          findAllRoles() {
            return this.connection.query(
              //  "USE Employees",
              "SELECT * FROM Roles;"
            );
          };
          findAllEmployees() {
            return this.connection.query(
              //  "USE Employees",
              "SELECT * FROM Employee;"
            );
          }; 
          addDepartment(inputData) {
            return this.connection.query(
              //  "USE Employees",
              'INSERT INTO Department (department_name) VALUE(?);', inputData
              );
              
          };
         addRoles(inputDataOne,inputDataTwo,inputDataThree) {
          return this.connection.query(
            //  name, salary, and department for the role
            'INSERT INTO Roles (job_title, department_name, salary) VALUES(?,?,?);', [inputDataOne, inputDataTwo, inputDataThree] 
            );
            };
            addEmployees(inputDataOne,inputDataTwo,inputDataThree,inputDataFour) {

              //change this point on
              return this.connection.query(
                
                'INSERT INTO Employee (first_name, last_name, job_title, manager) VALUES(?,?,?,?);', [inputDataOne, inputDataTwo, inputDataThree, inputDataFour] 
                );
                };
                updateEmployeeRole(inputDataOne,inputDataTwo) {
                  console.log(inputDataTwo, inputDataOne);
                  return this.connection.query(
                    
                 'UPDATE Employee SET job_title = (?) WHERE employee_id = (?);', [inputDataTwo, inputDataOne]
                 
                 );
                    };
        };
      
        let database = new DB(connection)

        if (displayDB === "View departments")
{

        database.findAllDepartments().then(data => {
          console.table(data);
          questions();
          // Here you will import object shaped databased from connection.js and then pass it to console.table, check their 
          // documentation for more information 
          //results in the console.table 
        });

      } else if (displayDB === "View roles") {
        database.findAllRoles().then(data => {
          console.table(data);
          questions();
        });
        console.log("View roles");

      } else if (displayDB === "View employees") {
 
        database.findAllEmployees().then(data => {
          console.table(data);
          questions();
        });

      } else if (displayDB === "Add departments") {

//list and input

//start new inquirer prompt, ask quetion, take data, call class function for query, pass the data, query, pass data you have

        inquirer.prompt(
          [{
              type: "input",
              name: "inputDepartment",
              message: "Please enter the name of the department",
            }
      
          ]).then(data => {
      let inputData = data.inputDepartment  
      database.addDepartment(inputData).then(data => {
        database.findAllDepartments().then(data => {
          console.table(data);
          questions();
        });
      });
    
    });

          

      } else if (displayDB === "Add roles") {
       
        inquirer.prompt(
          [{
              type: "input",
              name: "inputRolesOne",
              message: "Please enter the name of the role title",
            },
            {
              type: "input",
              name: "inputRolesTwo",
              message: "Please enter the name of the department name",
            },{
              type: "input",
              name: "inputRolesThree",
              message: "Please enter the amount of the annual salary",
            }
      
          ]).then(data => {
      let inputDataOne = data.inputRolesOne;
      let inputDataTwo = data.inputRolesTwo;
      let inputDataThree = data.inputRolesThree;
      database.addRoles(inputDataOne,inputDataTwo,inputDataThree).then(data => {
        database.findAllRoles().then(data => {
          console.table(data);
          questions();
        });
      });
    
    });
    

      } else if (displayDB === "Add employees") {

        //WHEN I choose to add an employee
//THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
inquirer.prompt(
  [{
      type: "input",
      name: "inputEmployeeOne",
      message: "Please enter employee's first name",
    },
    {
      type: "input",
      name: "inputEmployeeTwo",
      message: "Please enter employee's last name",
    },{
      type: "input",
      name: "inputEmployeeThree",
      message: "Please enter the role title of the employee",
    },{
      type: "input",
      name: "inputEmployeeFour",
      message: "Please enter the manager's name that the employee is reporting to",
    }

  ]).then(data => {
let inputDataOne = data.inputEmployeeOne;
let inputDataTwo = data.inputEmployeeTwo;
let inputDataThree = data.inputEmployeeThree;
let inputDataFour = data.inputEmployeeFour;
database.addEmployees(inputDataOne,inputDataTwo,inputDataThree,inputDataFour).then(data => {
database.findAllEmployees().then(data => {
  console.table(data);
  questions();
});
});

});


      } else {
        inquirer.prompt(
          [{
            type: "list",
            name: "roleUpdateChoice",
            message: "Please choose the employee by their Employee ID number who's role you wish to update(Press <enter> to select)",
            choices: ["1", "2", "3", "4", "5", "6"]

            },{
              type: "input",
              name: "roleUpdateInput",
              message: "Please enter the new role for the employee you wish to update",
            }
        
          ]).then(data => {
        let inputDataOne = data.roleUpdateChoice;
        let inputDataTwo = data.roleUpdateInput;
        database.updateEmployeeRole(inputDataOne,inputDataTwo).then(data => {
        database.findAllEmployees().then(data => {
          console.table(data);
          questions();
        });
        });
        
        });
      
      
      }


    }
    options(displayDB);
  })

};

questions();

/*
    "inquirer": "^7.3.2",
    "mysql": "^2.18.1",
*/


/*

Installed: mysql2, inquirer, console.table, npm i, npm start

https://www.npmjs.com/package/mysql2
check design database map

A walkthrough video demonstrating the functionality of the application.

The URL of the GitHub repository, with a unique name and a README describing the project.

*/