var http = require("http");

var hello = "hello javascript world!";
var port = 8080;

http.createServer(function (request, response) { 
        var answer = hello + ". You used this url: " + request.url; 
	
		response.writeHead(200, { 
			'Content-Type': 'text/plain' 
		}); 
		// Send data and end response. 
		response.end(answer); 
// Listen on the 8080 port. 
}).listen(port);

console.log("Server is listening on " + port);