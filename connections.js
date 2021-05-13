// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'slow&steady',
  database: 'Employees'
});
connection.connect();
module.exports = connection;




// execute will internally call prepare and query
connection.execute(
    //all queries, one connection per query
    //check and fix queries, askBCS results console.log and MySQl Bench and connect it to .then
    'DESCRIBE Employees;' 
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server, data 
    console.log(fields); // fields contains extra meta data about results, if available
 
    // If you execute same statement again, it will be picked from a LRU cache
    // which will save query preparation time and give better performance
  }
);

//connection.execute{
 //pick employees, update anything, USER INPUT TO VARIABLE, ONE query for each parameter to update   
//}

//queries in the function to be imported in index.js
//module.exports


/*Zidan:
No need for password is .env password is fine-checker will use own ways(confirm), host is URL of database( if deployed) and local host in your case, user root is fine, 
database is database name, seed.sql is used only to create tables, connection.query can be used as object, first param sql query and 2nd 
call back function for error 
use:
https://www.npmjs.com/package/mysql2

https://www.npmjs.com/package/console.table

https://www.npmjs.com/package/mysql2

*/