//dependencies
var path = require("path");

//ACTUAL ROUTING

module.exports = function(app) {

    //HTML Get requests

    //home page
    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
    //survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    // If no matching route is found default to home
    app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};