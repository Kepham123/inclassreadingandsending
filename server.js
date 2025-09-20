const http = require('http');
const fs = require('fs');
const url = require('url');
//call back function
serveStatic = function(req,res) {
	let fileName = '.' + url.parse(req.url).pathname;
	fs.readFile(fileName, function(err, content) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/plain' });
			res.write('404 Not Found');
			res.end();
			return;
		}
		res.writeHead(200, {'Content-Type': 'image/jpg'});
		res.write(content);
		res.end();
	});
}

const myserver =http.createServer(serveStatic);
myserver.listen(80, function() { console.log("Listening on Port 80"); });
