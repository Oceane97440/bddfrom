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
 //affiche dans le consle donnée de ma bdd
  connection.query('SELECT * from infos',function(err,rows,field){
     if(!err){
         console.log(rows);
     }
     else{
        console.log(err);
         }
     
 })

//affiche donné sur une page web
 app.get('/look', function(req, res) {
  var query = connection.query('SELECT * FROM infos', function(err, result) {
     res.render('affiche.ejs',{result: result});   
 });
});

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

 //Eror 404
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page introuvable !');
});
//co port 8097
app.listen(8097);