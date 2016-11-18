var request = require('request');
var crypto = require('crypto');

var getCharacterInfo = function (name, callback) {

    var timestamp = new Date().toISOString();
    var publicKey = process.env.MARVEL_PUBLIC_KEY;
    var privateKey = process.env.MARVEL_PRIVATE_KEY;
    var hash = crypto.createHash('md5').update(timestamp + privateKey + publicKey).digest('hex');
    
    var options = {
        url: 'http://gateway.marvel.com/v1/public/characters',
        qs: {
            ts: timestamp,
            name: name,
            apikey: publicKey,
            hash: hash
        }
    };

    request.get(options, function(error, msg, body) {
        if (error) {
            console.log("Error getting character: " + error);
            callback(error);
            return;
        }
        if(msg.statusCode != 200) {
            console.log("Got a bad status code: " + msg.statusCode);
            callback(msg.statusCode);
            return;
        }

        var infoObj = JSON.parse(body);

        // Did we get any characters?
        if(infoObj.data.count === 0) {
            callback(null, null);
            return;
        }

        // Just use the first character
        var character = infoObj.data.results[0];
        callback(null, character);
    });
}

exports.getCharacterInfo = getCharacterInfo;