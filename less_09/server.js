
var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response) {
	console.log('Start page is running');
	response.send("<h1>Welcome to the lesson regarding AJAX</h1>");
});

server.get("/userGet", function(request, response) {
	console.log(request.query);
	request.query.userLastName += " is validated by GET";
	request.query.userSurname += " is validated by GET";
	request.query.userAge += " is validated by GET";
	request.query.userResidence += " is validated by GET"; 
	response.send("You have successfully used Get method "+ JSON.stringify(request.query));
});

server.post("/userPost", function(request, response) {
	console.log(request.body);
	request.body.userLastName += " is validated by POST";
	request.body.userSurname += " is validated by POST";
	request.body.userAge += " is validated by POST";
	request.body.userResidence += " is validated by POST"; 
	response.send("You have successfully used Post method "+ JSON.stringify(request.body));
});


server.listen(3001);


