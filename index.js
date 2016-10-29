var express = require('express');
var app = express();

var ejsLayouts = require('express-ejs-layouts');
app.use(ejsLayouts);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
});

app.get('/about', function(req, res) {
    res.render('about')
});


app.use('/', express.static(__dirname + '/static/'));

app.listen(3000);
