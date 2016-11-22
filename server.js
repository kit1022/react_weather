var express = require('express');

//create our app
var app = express();

//folder to serve
app.use(express.static('public'));

//start the server
app.listen(3000, function(){
	console.log('Express server is up on port http://localhost:3000/');
});