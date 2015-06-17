var express = require("express");
var app = express();
var morgan = require("morgan");

app.use(morgan("dev"));

app.listen(3000,function(){
	console.log("server listening upon connection");
});

app.get("/",function(request,response){
	response.status(200).send("Hello World!");
})
// app.send();