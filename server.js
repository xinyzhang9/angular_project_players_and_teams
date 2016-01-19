var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname,'client/static')));

app.get('/',function(req,res){
	res.render('index');
})

app.listen(8000,function(){
	console.log('listening on port 8000...');
})