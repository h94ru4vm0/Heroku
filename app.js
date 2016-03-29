var express = require('express');
var app = express();

var port = process.env.PORT || 3000;


var Data =
{
	title:'110319001 蔡季軒',
	pic:
	['Pic_01.jpg','Pic_02.jpg','Pic_03.jpg','Pic_04.jpg','Pic_05.jpg','Pic_06.jpg','Pic_07.jpg','Pic_08.jpg','Pic_09.jpg','Pic_10.jpg','Pic_11.jpg','Pic_12.jpg'],
		name:['A','B','C','D','E','F','G','H','I','J','K','L']
}


app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});
app.get('/', function(req, res) {
	res.render('index',Data);
});
app.listen(port);
