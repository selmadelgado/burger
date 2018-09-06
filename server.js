// Create Express boilerplate for Node Server
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port);



// var PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.listen(PORT, function() {
//   console.log("Server listening on: http://localhost:" + PORT);
// });