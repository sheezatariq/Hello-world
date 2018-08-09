const express= require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

//database connection
require("./mongo")

//Models
require("./model/Post");

//Middleware
app.use(bodyParser.json())

const Post = mongoose.model("Post")

app.get("/posts" , async (req, res)  => {
  try{
    const posts = await Post.find({})
    res.send(posts)
  } catch(error) {
    res.status(500)

  }
});

app.get("/posts/:postId" , (req,res) => {
  res.send({
    ok:true
  })
})
app.post("/posts" , async (req, res) => {
  try{ const post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
 
   await post.save();
   res.send(post)
  } catch(error) {
    res.status(500)
  }
  
})
 
app.listen(8000,function() {
    console.log("server is running on port 8000")
})






// const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
// const bodyParser     = require('body-parser');
// const db             = require('./config/db');
// const app            = express();
// const port = 8000;

// const routes = require('./app/routes/note_routes');
// app.use(routes);


// app.use(bodyParser.urlencoded({ extended: true }));
// console.log(db)
// MongoClient.connect('mongodb://connection:sheeza123@ds215172.mlab.com:15172/connectivitydb', (err, database) => {
//   console.log('Data base Connected');  
// if (err) return console.log(err)
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });               
// }) 