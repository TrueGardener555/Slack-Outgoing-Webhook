var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/outgoingwebhook', function (req, res, next) {
    
    var botPayload = {
        text : 'message received'
    };

    // the webhook "bot" will always have the user_name slackbot
    // if you don't do this and you are only listening to a channel
    // you will have the bot replying to itself
    if (req.body.user_name !== 'slackbot') {
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("Outgoing webhook service is running on port", port);
});
