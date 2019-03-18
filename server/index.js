//routes

//require express
const express = require('express');
//req.body.item,.... parsing it
const bodyParser = require('body-parser')
//importing our database into this file
const db = require('../database/index.js');
// for path.join __dirName -->server/index.js + ../client/dist
const path = require('path');

//createServer
const app = express();
//strigify our req.body.item etc
app.use(bodyParser.json());

//sending back static files to user, like index.html
app.use(express.static(path.join(__dirname, '../client/dist')));



//get route
//GET /groceries: send all groceries from database
app.get('/groceries',function(req, res){
  //data from our database from function getALL
  console.log('/groceries')
  db.getAll((err, results) => {
    if(err){
      res.status(500).send();
    } else {
      res.send(results);
    }
  });
});

//post route
//POST /groceries: insert one grocery into the database
app.post('/groceries', function(req, res){
  db.insertOne(req.body.item, req.body.quantity, (err, result) => {
    if(err){
      res.status(500).send();
    }else{
      res.send(result);
    }
  });
  
});

app.listen(3000, () => { 
  console.log('listening on port', 3000)
});