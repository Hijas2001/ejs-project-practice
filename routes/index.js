var express = require('express');
var router = express.Router();
const { MongoClient, ServerApiVersion } = require('mongodb');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hijas' ,detail:{place :"wayanad" , age :22}});
});

router.post("/submit",(req,res,next)=>{

  console.log( req.body);

  
  const uri = "mongodb+srv://hijas9089k:hijas90897459@cluster0.fz8gap7.mongodb.net/?appName=Cluster0";

  const clint = new MongoClient(uri)
  async function run() {
    try {
      await clint.connect()
      console.log("mongodb connnected successfuly");
      
    const data =await clint.db("ejsproject").collection("User").insertOne(req.body)

     console.log("data inseerted succcessfully",data);
     
      
    } finally {
      clint.close()
    }
  }

  run().catch(console.dir)
  
  // // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  // const client = new MongoClient(uri, {
  //   serverApi: {
  //     version: ServerApiVersion.v1,
  //     strict: true,
  //     deprecationErrors: true,
  //   }
  // });
  
  // async function run() {
  //   try {
  //     // Connect the client to the server	(optional starting in v4.7)
  //     await client.connect();
      
  //     // Send a ping to confirm a successful connection
  //     await client.db("admin").command({ ping: 1 });
  //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
  //     // Specify the database and collection
  //     const database = client.db("mydatabase"); // Replace with your database name
  //     const collection = database.collection("mycollection"); // Replace with your collection name
  
  //     // Create a document to insert
  
  //     // Insert the document
  //     const result = await collection.insertOne(req.body);
  //     console.log(`A document was inserted with the _id: ${result.insertedId}`);
  //   } finally {
  //     // Ensures that the client will close when you finish/error
  //     await client.close();
  //   }
  // }
  
  // run().catch(console.dir);
  


  res.send("you are login ")
})

module.exports = router;
