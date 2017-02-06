var express = require('express')
var app = express()
app.get('/', function (req, res) {
	res.send({name:"admin",pwd:"aaa"});
})

app.listen(3000,function(){
	console.log("success listened");
})
