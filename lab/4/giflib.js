var request = require("request");

var getgifs = function (word, done) {

	request.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + word, function(error, response, body){
			var bodySon = JSON.parse(body).data;
			
			var result = {
				'url': bodySon.url,
				'gifurl': bodySon.image_original_url
			};

			done(result);
		});
}

module.exports = getgifs;