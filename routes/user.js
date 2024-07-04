// var express = require('express');
// var router = express.Router();
// const { MongoClient, ServerApiVersion } = require('mongodb');


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Hijas' ,detail:{place :"wayanad" , age :22}});
// });

// router.post("/submit",(req,res,next)=>{

//   console.log( req.body);
  
//   // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
  
//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
      
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
//       // Specify the database and collection
//       const database = client.db("mydatabase"); // Replace with your database name
//       const collection = database.collection("mycollection"); // Replace with your collection name
  
//       // Create a document to insert
  
//       // Insert the document
//       const result = await collection.insertOne(req.body);
//       console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
  
//   run().catch(console.dir);
  


//   res.send("you are login ")
// })

// module.exports = router;

var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  const products = [
    {
      title: "Card 1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://img.etimg.com/photo/msid-98898599,imgsize-35708/Xiaomi12Pro5G.jpg",
      link: "#",
      buttonText: "Go somewhere"
    },
    {
      title: "Card title 2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbKnG--JqNfXHh0OXOQgveASbG2ZDeOrpcQ&s",
      link: "#",
      buttonText: "Go somewhere"
    },
    {
      title: "Card title 3",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbKnG--JqNfXHh0OXOQgveASbG2ZDeOrpcQ&s",
      link: "#",
      buttonText: "Go somewhere"
    },
    {
      title: "Card title 4",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbKnG--JqNfXHh0OXOQgveASbG2ZDeOrpcQ&s",
      link: "#",
      buttonText: "Go somewhere"
    },
    {
      title: "Card title 5",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbKnG--JqNfXHh0OXOQgveASbG2ZDeOrpcQ&s",
      link: "#",
      buttonText: "Go somewhere"
    },
    {
      title: "Card title 6",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbKnG--JqNfXHh0OXOQgveASbG2ZDeOrpcQ&s",
      link: "#",
      buttonText: "Go somewhere"
    },
    {
      title: "Card title 7",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbKnG--JqNfXHh0OXOQgveASbG2ZDeOrpcQ&s",
      link: "#",
      buttonText: "Go somewhere"
    },
    {
      title: "Card title 8",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbKnG--JqNfXHh0OXOQgveASbG2ZDeOrpcQ&s",
      link: "#",
      buttonText: "Go somewhere"
    },
    {
      title: "Card title 9",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbKnG--JqNfXHh0OXOQgveASbG2ZDeOrpcQ&s",
      link: "#",
      buttonText: "Go somewhere"
    },
    {
      title: "Card title 10",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbKnG--JqNfXHh0OXOQgveASbG2ZDeOrpcQ&s",
      link: "#",
      buttonText: "Go somewhere"
    }
  ];

  
  res.render("user/home",{layout:"layout/userLayout"});
});


module.exports = router;

