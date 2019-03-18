/*
mysql npm docs - how to connect, how to make a query
mysql db docs - how to make db, how to make table
      how to insert row, how to select rows
*/

// connect to our database
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'lana',
  password: 'lana1234',
  database : 'grocery_list'
});

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });


// write a function that selects all groceries
var getAll = function(callback) {
  console.log('getall 1')
  connection.query('select * from groceries', function (error, results, fields) {
    console.log('getall 2')
    if (error) {
      callback(error,null);
    } else{
      callback(null, results);
    }
   

  });
};

//insert function, no result no need
var insertOne = function(item, quantity, callback) {
  const query = `INSERT INTO groceries (item, quantity) VALUES (?, ?)`;
  connection.query(query, [item, quantity], function (error, results, fields) {
    callback(error, null);
  });
};


// insertOne('egg rolls', 100, function(err){
//   console.log('egggggggg',err);
// });


// getAll(function(error res){//do something with error or results
  
// });


module.exports.getAll = getAll;
module.exports.insertOne = insertOne;


// write a function that inserts a grocery
// function(item, quanity)