var friends = require("../data/friends")

module.exports = function(app) {
    app.get("/apiroutes", function(req, res) {
        res.json(friends);
    },
    
    app.post("/apiroutes", function(req, res){
        console.log(req.body);
        friends.push(req.body);
    })
)};