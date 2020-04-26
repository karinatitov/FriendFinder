var express = require('express');
 
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {

        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        var dif = 1000;
        var match;
        for (var i = 0; i < friends.length; i++) {

            var existingFriend = friends[i];
            var existingFriendScores = existingFriend.scores;
            var currentDif = 0;

            for (var j = 0; j < existingFriendScores.length; j++) {

                var score1 = parseFloat(existingFriendScores[j]);
                var score2 = parseFloat(newFriend.scores[j]);

                currentDif += Math.abs(score1 - score2);
            }

            if (currentDif < dif) {

                match = existingFriend;
                dif = currentDif;
            }

            friends.push(newFriend);

            res.json(match);


        }


    })
}