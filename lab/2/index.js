var restify = require("restify");

var server = restify.createServer();

server.listen(1337, function(){
	console.log('Server started.');
})

server.get("/gifs", function(req, res){
	res.json({
		gifs: [
			"https://media.giphy.com/media/N8Lfh9gWcWYIU/giphy.gif",
			"https://media.giphy.com/media/26gYKaUMw1IM2JeeI/giphy.gif"
		]
	});
});