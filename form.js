//connexion serveur
var express = require('express'); 
var bodyParser = require("body-parser");
var app = express();
app.unsubscribe(bodyParser());

app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'ejs');
//connexion bdd
var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   port:3306,
   database:'bddnodejs',
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection;




app.get('/submit', function(req, res) {});
  // exécuté lorsqu'est appelé form.ejs

  res.render('index.ejs');
  connection.query('SELECT * from infos',function(err,rows,field){
    if(!err){
        console.log(rows);
    }
    else{
       console.log(err);
        }
 });





//ajout
/* app.get('/submit/add',function (req,res) {
  console.log
})


//post
app.post('/submit',function(req,res){
    console.log(req.body);
    var sql = "INSERT INTO infos (noms, prenoms, mail) VALUES (?,?,?)";
    connection.query(sql, function (err) {
        if (err) throw err
      res.render('index',{
    message:'Donnée savegarder dans bdd'})
      
      })
    connection.end();
});

*/




//Eror 404
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});
//co port 8096
 app.listen(8096);