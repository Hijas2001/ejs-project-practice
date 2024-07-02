var express = require('express');
var router = express.Router();
const Mongoddbclint = require("mongodb").MongoClient 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hijas' ,detail:{place :"wayanad" , age :22}});
});

router.post("/submit",(req,res,next)=>{

  console.log( req.body);
  
  // Mongoddbclint.connect("mongodb+srv://hijas9089k:3jxxz1CS84BY5pU0@cluster0.fz8gap7.mongodb.net/",(err,clint)=>{
  //   if(err){
  //     console.log(err);
  //   }else{
  //     clint.db("ejsecom").collection("user").insertOne(req.body)
  //     console.log("database connected");
  //   }
  // })

  const { MongoClient } = require('mongodb');

  const uri = "mongodb+srv://hijas9089k:3jxxz1CS84BY5pU0@cluster0.fz8gap7.mongodb.net/?retryWrites=true&w=majority";
  
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Failed to connect to the database', err);
      return;
    }
  
    const db = client.db('ejsecom');
    const collection = db.collection('user');
  
    // Assuming req.body contains the data to be inserted
    collection.insertOne(req.body, (err, result) => {
      if (err) {
        console.error('Failed to insert document', err);
      } else {
        console.log('Document inserted successfully', result);
      }
      client.close();
    });
  });
  



  res.send("you are login ")
})

module.exports = router;
