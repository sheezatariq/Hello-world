const  router= require("express").Router();
const mongoose =require("mongoose");

const Post = mongoose.model("Post")

router.get("/" , async (req, res)  => {
    console.log(req.name);
  
    const posts = await Post.find({})
    res.send(posts)
 
});

// app.get("/posts/:postId" , (req,res) => {
//   res.send({
//     ok:true
//   })
// })
router.get("/:postId", async(req, res)=> {

    const post=await Post.findOne({_id:req.params.postId})
    res.send(post)
  
});
router.post("/" , (req, res) => {
console.log(req.body)
   const post = new Post();
    // post.title = req.body.title;
    post.content = req.body.content;
    post.save();
   res.send(post)
  
  
  
});
router.put("/:postId", async(req, res)=>{
 
    const post= await Post.findByIdAndUpdate({
      _id:req.params.postId
    }, req.body, {
      const : true,
      runValidators:true
    
  })
      res.send(post)
 
    });
    router.delete("/:postId" , async (req, res)=> {
     
        const post = await Post.findByIdAndRemove({
          _id: req.params.postId 
        });
        res.send(post)
     
    })
module.exports= router;
