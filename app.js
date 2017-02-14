var $ = require('jquery')(require("jsdom").jsdom().defaultView); 
var express = require('express');
var fs = require('fs');
var iconv = require('iconv-lite');
var http = require('http'); 
var https = require('https'); 
var app = express();

app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(express.static(__dirname));


app.get('/', function(req, res){
	res.sendfile(__dirname+"/index.html");
});

app.listen(1337,'127.0.0.1');