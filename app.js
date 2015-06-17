var express = require("express");
var app = express();
var morgan = require("morgan");
var swig = require("swig");

swig.setDefaults({ cache: false });

app.use(morgan("dev"));
app.engine("html", swig.renderFile)



app.listen(3000,function(){
	console.log("server listening upon connection");
});

app.set("views",__dirname + "/views")
app.set("view engine","html")


var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.get("/",function(request,response){
	response.render("index", {title: 'Hall of Fame', people: people});
})

// app.get("/",function(request,response){
// 	response.status(200).send("Hello World!");
// })

// app.get("/news",function(request,response){
// 	response.status(200).send("This is the news page!");
// })
// app.send();