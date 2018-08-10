const mongoose = require("mongoose");
const post_schema =  new mongoose.Schema(
    {
    title:{
      type: String,
      required: "Title is required"
    },
    content:{
        type: String,
        required: "Content is required"
    }
},
{
     timestamps:true
}
    );

 module.exports =mongoose.model("Post", post_schema)


// var mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
// const Post = new Schema({
//   author: ObjectId,
//   title: String,
//   body: String,
//   date: Date
// });

// const post = mongoose.model('post', Post);
