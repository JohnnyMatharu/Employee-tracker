var inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const connection = require('./connections');



//start with .sql file then ask bcs how to connect questions with cTable annd screenshot from TAs


/* 

const questions = () => {

  inquirer.prompt(
  [{
      // this needs to be fixed to change title of readme.md -check
      type: "input",
      name: "title",
      message: "What is your project title?"
    },    
     { type: "input",
      name: "description",
      message: "Please enter a description of your application"
      },
      { 
        type: "input",
        name: "installation",
        message: "Please enter the installation instructions"
      },
      { 
        type: "input",
        name: "usage",
        message: "Please enter the usage information"
      },
      { 
        type: "input",
        name: "contribution",
        message: "Please enter the contribution guidelines"
      },
      { 
        type: "input",
        name: "test",
        message: "Please enter the test instructions" 
      },
      { 
        //you can check this in 9.3, this section will be in conjuction of license portion of other page, selection is working but value is not being produced
        type: "list",
        name: "license",
        message: "Please choose a license for your application from a list of following options (Press <enter> to select)",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]              
    
      },
      {
      type: "input",
      name: "Github",
      message: "What is your GitHub username for this application?" 
    },
{
type: "input",
name: "email",
message: "What is your email address?"
},
{   
type: "input",
name: "questions",
message: "Do you have any questions, you can also reach me with additional questions via email?"
}]).then(data =>  {
    console.log(data)






What would you like to do?

>Add departments
 Add roles
 Add employees
 View departments
 View roles
View employees
Update employee roles

id Department 
1 Finance
2 Legal 
3 Marketing
4 Engineering
5 Art
6 Test

View roles
id  Roles          salary    dapartment_id
1   Accountant     75000     1
2   Lawyer         300000    2
3   Marketing team 150000    3
4   Software Dev   125000    4
5   Designer       60000     3
6   Sales          60000     3

View Employees 
id Employee   Manager     Role         Dept
1  Victor     null        Accountant    Finance
2  Amber      Ramon       Accountant    Finance 
3  Lito       Ram         Software Dev  Engineering 
4  Bogata     Ram         Designer      Art
5  Erik       Ram         Sales         test
6  Carl       Ram         Software Dev  Engineering



*/




/*
ERIK (TA):
sql
node.js
Node.js: inquirer
add packages
    "inquirer": "^7.3.2",
    "mysql": "^2.18.1",
no server.js needed, only adding database
only 
index.js (main inquirer)
and sqlconnections.js which has connections to database (imported file)
.sql file will be used to save the queries, but they only work when they are in mySQL workbench
*/


/*
you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.


Acceptance Criteria:
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

Hilary:
console.table package, will display tables, 
view dept,roles
add all those
update those
seeds.sql needed to create data (to see if we can populate data)
ask questions and update table using sql (asking user what to do, indirectly asking, bring emplyee, bring emply again to represent manager, use alias, their id will used to enter other employees)
no need to clear table like in the module

There is a demo available to consult including the screen shorts from class

plan:
Inquirer tues
my sql wed
connections thurs
FRi, Sat and Sun remaining and submission

Installed: mysql2, inquirer, console.table, 

You will be committing a file that contains your database credentials. Make sure your MySQL password is not used for any other personal accounts, because it will be visible on GitHub.

You might also want to make your queries asynchronous. MySQL2 exposes a .promise() function on Connections to “upgrade” an existing non-Promise connection to use Promises. Look into MySQL2's documentation (Links to an external site.) to make your queries asynchronous.
https://www.npmjs.com/package/mysql2
check design database map

As the image illustrates, your schema should contain the following three tables:

Department

id: INT PRIMARY KEY

name: VARCHAR(30) to hold department name

Role

id: INT PRIMARY KEY

title: VARCHAR(30) to hold role title

salary: DECIMAL to hold role salary

department_id: INT to hold reference to department role belongs to

Employee

id: INT PRIMARY KEY

first_name: VARCHAR(30) to hold employee first name

last_name: VARCHAR(30) to hold employee last name

role_id: INT to hold reference to employee role

manager_id: INT to hold reference to another employee that is manager of the current employee. This field might be null if the employee has no manager.

You might want to use a separate file containing functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a seeds.sql file to pre-populate your database. This will make the development of individual features much easier.

Bonus
See if you can add some additional functionality to your application, such as the ability to do the following:

Update employee managers.

View employees by manager.

View employees by department.

Delete departments, roles, and employees.

View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.

Repository contains a high-quality README with description and a link to a walkthrough video.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

A walkthrough video demonstrating the functionality of the application.

The URL of the GitHub repository, with a unique name and a README describing the project.

*/