var http = require('http');

function onRequest(request, response) {
	response.writeHead(200);
	response.write('Dog is running now. ');
	setTimeout(function() {
		response.end('Dos has stopped');
	}, 5000);
}

http.createServer(onRequest).listen(8080);

console.log('listening on port 8080...');
