const mongoose = require("mongoose");
require("dotenv").config();
const conString = require('./config/db.js');
const mongoDBErrors = require("mongoose-mongodb-errors")

mongoose.Promise = global.Promise;
mongoose.plugin(mongoDBErrors);
var mongoURI;

mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");
 
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});

mongoose.connect(conString.conString);