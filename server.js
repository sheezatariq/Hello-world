const express= require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan")

//database connection
require("./mongo")

//Models
require("./model/Post");

//Middleware
app.use(bodyParser.json())
   .use(morgan())
const Post = mongoose.model("Post")

app.get("/posts" , async (req, res)  => {
  try{
    const posts = await Post.find({})
    res.send(posts)
  } catch(error) {
    res.status(500)
    Actions
  }
});

// app.get("/posts/:postId" , (req,res) => {
//   res.send({
//     ok:true
//   })
// })
app.get("/posts/:postId", async(req, res)=> {
  try{
    const post=await Post.findOne({_id:req.params.postId})
    res.send(post)
  }catch (error){
    res.status(500);
  }  
  
});
app.post("/posts" , (req, res) => {
console.log(req.body)
   const post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.save();

   res.send(post)
  
  
  
});
app.put("/posts/:postId", async(req, res)=>{
  try{
    const post= await Post.findByIdAndUpdate({
      _id:req.params.postId
    }, req.body, {
      const : true,
      runValidators:true
    
  })
      res.send(post)
  } catch(error){
    res.send(500)
  }
    
    });
    app.delete("/posts/:postId" , async (req, res)=> {
      try{
        const post = await Post.findByIdAndRemove({
          _id: req.params.postId 
        });
        res.send(post)
      } catch(error){
        res.send(500)
      }
    })
    
app.listen(8900,function() {
    console.log("server is running on port 8900")
})






