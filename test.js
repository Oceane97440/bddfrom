var express = require('express'); 
var bodyParser = require("body-parser");
var app = express();
app.unsubscribe(bodyParser());

var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   port:3306,
   database:'bddnodejs',
 });
 connection.query('SELECT * from infos',function(err,rows,field){
     if(!err){
         console.log(rows);
     }
     else{
        console.log(err);
         }
     
 })
  /**
   * 
     var query = "INSERT INTO infos (noms, prenoms, mail) VALUES (?,?,?)";
            db.query(query, (err, result) => {
                if (err) {
                return res.status(500).send(err);
                }
                res.redirect('/');
            });
*/

 connection.end();