var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 80;


app.use(express.static('public'));
app.set('views', './src/views');



//template engine
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, function(){
    console.log("listening on port: " + port);
});

app.get('/', function(req, res){
    res.render('index', {title: 'hello from render'});
});

app.post('/action', function(req, res){
    console.log(req.body.data);
});