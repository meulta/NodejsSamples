var restify = require("restify");
var giflib = require("./giflib");

var server = restify.createServer();

server.listen(1337, function(){
	console.log('Server started.');
})

server.get("/gifs/:word", function(req, res){
	console.log(req.params.word);
	res.json(giflib(req.params.word));
});