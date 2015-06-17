//Hi Yves

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

app.get("/news",function(request,response){
	response.status(200).send("This is the news page!");
})
// app.send();