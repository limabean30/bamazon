let mysql = require("mysql");


let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: "bean2326",
    database: 'bamazon'
});


connection.query( "SELECT * FROM bamazon;" , function( error ,  results) {
    console.log(results);
    console.log(results.length);
    connection.end();
});

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('bamazon\n');
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');
 var http = require("http");

