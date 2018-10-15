/*
mysql npm docs - how to connect, how to make a query
mysql db docs - how to make db, how to make table
      how to insert row, how to select rows
*/

// connect to our database
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'grocery_list'
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


// write a function that selects all groceries
var getAll = function() {
  connection.query('select * from groceries', function (error, results, fields) {
    if (error) throw error;
    console.log(error, results, fields);
  });
};

getAll();



// write a function that inserts a grocery
// function(item, quanity)