var express = require('express');

var app = express();

var port = 80;


app.use(express.static('public'));
app.set('views', './src/views');



//template engine
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');



app.listen(port, function(){
    console.log("listening on port: " + port);
});

app.get('/', function(req, res){
    res.render('index', {title: 'hello from render'});
});