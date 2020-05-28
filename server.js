//dependencies
var express = require("express")

//creating instance and the server
var app = express();
var PORT = process.env.PORT || 8090

//express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  //ROUTER - these are housed in the routing folder
    //api routes
    // require("./routes/apiRoutes")(app);
    //html routes
    require("./app/routing/htmlRoutes")(app);
 
    //LISTENER
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });