//routes/index.js

	var express = require('express');
	var router = express.Router();
	// could use one line instead: var router = require('express').Router();
	var tweetBank = require('../tweetBank');




module.exports = function (io) {



	router.get('/', function (req, res, next) {
	  var tweets = tweetBank.list();
	  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true} );
	});

	router.get('/users/:name', function(req, res, next) {
	  var name = req.params.name;
	  var list = tweetBank.find( {name: name} );
	  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, showForm: true, name: name } );
	});

	router.get('/users/:name/tweets/:id', function(req, res, next) {
	  var name = req.params.name;
	  var id = req.params.id;
	  var list = tweetBank.find( {name: name, id: id} );
	  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
	});


	router.post('/submit', function(req, res, next) {
		var name = req.body.name;
		var text = req.body.text;
		tweetBank.add(name,text);
		var list = tweetBank.find({name: name});
		var id = tweetBank.getId();
		// res.render( 'index', { title: 'Twitter.js - New Tweet '+ name, tweets: list } );
		
		io.sockets.emit('new_tweet', {name: name, text: text, id: id});
		console.log(req);
		res.redirect("/users/"+name);
	});


  return router; 
};