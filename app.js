var http = require("http");
var port = process.env.PORT || 8085;

const mySecret = process.env.MY_SECRET;

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   response.end(`This is the test NodeJS App\n This is my secret ${mySecret}`);
}).listen(port);

// Console will print the message
console.log('Server running at http://127.0.0.1:' + port);
