const mongoose = require("mongoose");
require("dotenv").config();
const conString = require('./config/db.js')

mongoose.Promise = global.Promise;
var mongoURI;

mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");
 
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});

mongoose.connect(conString.conString);