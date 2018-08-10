const express= require("express");
require("express-async-errors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//database connection
require("./mongo");

//Models
require("./model/Post");

//Middleware is used for error handling
app.use(bodyParser.json())
   .use(morgan());
    // app.use((req, res, next)=> {

    //   req.name = "Sheeza";
    //   next();


    // });

   //Router
   app.use("/posts", require ("./routes/posts"))

   //not Found Error
   app.use((req,res, next) =>{
     req.status = 404;
     const error=new Error("Routes not responed");
      next(error);

   });
  //error handler
  if(app.get("env")== "production") {
    app.use((error, req, res, next) => {
      res.send(req.status ||500).send({
        message:error.message
      });
    });
    
  }
  app.use((error, req, res, next) => {
    res.send(req.status ||500).send({
      message:error.message,
      stack:error.stack
    });
  });
app.listen(7800,function() {
    console.log("server is running on port 7800")
})






