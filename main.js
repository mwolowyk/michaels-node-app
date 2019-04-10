var http = require("http");
var port = process.env.PORT || 8085;

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   response.end('Hello From NodeJS App\n');
}).listen(port);

// Console will print the message
console.log('Server running at http://127.0.0.1:' + port);






