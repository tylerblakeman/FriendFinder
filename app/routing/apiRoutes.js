var friends = require("../data/friends")
var fs = require('fs');
module.exports = function(app) {
    app.get("/apiroutes", function(req, res) {
        res.json(friends);
    },
    
    app.post("/apiroutes", function(req, res){
        var newUser = req.body;
        var matchedFriend;
        var matchedPhoto;
        var matchedFriendDifference = 10000000;
        //looping through each of the current friends
        for (let i = 0; i < friends.length; i++) {
            var difference = 0;
            console.log(`these are the scores: ${friends[i].scores}`);
            for (let x = 0; x < friends[i].scores.length; x++) {
                // console.log(`individual score ${friends[i].scores[x]}`);
                // console.log(`new user scores: ${newUser.scores[x]}`);
                difference += Math.abs(Number(friends[i].scores[x])-Number(newUser.scores[x]));
                // console.log(difference); 
            }
            if (difference < matchedFriendDifference) {
                console.log(`difference: ${difference}`)
                console.log(friends[i].name)
                matchedFriendDifference = difference;
                matchedFriend = friends[i].name;
                matchedPhoto = friends[i].photo;
            }

        }
        res.json({status: 'OK', matchedFriend: matchedFriend, matchedPhoto: matchedPhoto});
        console.log(req.body);
        friends.push(req.body);
        // console.log(friends)
    })
)};