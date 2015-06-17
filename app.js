//Hi Yves

var express = require("express");
var app = express();
var morgan = require("morgan");
var swig = require("swig");
var bodyParser = require('body-parser');

var socketio = require('socket.io');

var routes = require('./routes/');

var server = app.listen(3000,function(){
	console.log("server listening upon connection");
});

var io = socketio.listen(server);
console.log(io);
app.use(bodyParser.urlencoded());
app.use('/', routes(io));

app.use(express.static(__dirname + '/public'));

swig.setDefaults({ cache: false });

app.use(morgan("dev"));
app.engine("html", swig.renderFile)






app.set("views",__dirname + "/views")
app.set("view engine","html")


var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


// app.get("/",function(request,response){
// 	response.render("index", {title: 'Hall of Fame', people: people});
// })

// app.get("/",function(request,response){
// 	response.status(200).send("Hello World!");
// })

// app.get("/news",function(request,response){
// 	response.status(200).send("This is the news page!");
// })
// app.send();