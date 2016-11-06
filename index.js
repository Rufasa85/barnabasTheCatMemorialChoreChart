var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var ejsLayouts = require('express-ejs-layouts');
app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
    //load in this week and next week, figure out how to do date shit
    res.render('index')
});

app.get('/about', function(req, res) {
    //needs pic of meeeeeeeeeeee
    res.render('about')
});

app.route('/newuser').get( function(req, res) {
    //should be one time use
    res.render('newuser')
}).post(function(req,res) {
    res.send(req.body.params)
});

app.route('/newtask').get( function(req, res) {
    //should be one time use
    res.render('newtask')
}).post(function(req,res) {
    res.send(req.body.params)
});


app.route('/edit').get(function(req,res){
    //hide it doooood
    res.render('edit');
}).post(function(req,res) {
    //update whole damn thing
    res.send(req.body);
})

app.post('/save/:task', function(req,res) {
    //find task in database, save
    res.send(req.params);
})

app.use('/', express.static(__dirname + '/static/'));

app.listen(3000);
