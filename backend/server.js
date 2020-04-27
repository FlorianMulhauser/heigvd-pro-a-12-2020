// server.js
console.log('May Node be with you')

const express = require('express');
const app = express();
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test_node_js:R9Zspp9anLGBk9Ik@progroupa12-f3mld.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("pro").collection("pro");
  


  app.post('/quotes', (req, res) => {
 	console.log(req.body)
 	collection.insertOne(req.body).then(result => {
      res.redirect('/');
    })
    .catch(error => console.error(error))
})

  app.listen(3000, function() {
  console.log('listening on 3000')
})




app.get('/', (req, res) => {
  collection.find().toArray()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.error(error))
})



  //client.close();
});