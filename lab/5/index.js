var restify = require("restify");
var builder = require("botbuilder");
var giflib = require("./giflib");

var server = restify.createServer();

server.listen(1337, function(){
	console.log('Server started.');
})

server.get("/gifs/:word", function(req, res){
	console.log(req.params.word);
	giflib(req.params.word, function(gif){
		res.json(gif);
	});
});

var connector = new builder.ChatConnector({
	appId: '',
	appPassword: ''
});

var bot = new builder.UniversalBot(connector);
server.post("api/messages", connector.listen());

bot.dialog("/", function(session){
	session.send("looking for a gif...");
	giflib(session.message.text, function(gif){
		session.send(gif.url);
	});
});