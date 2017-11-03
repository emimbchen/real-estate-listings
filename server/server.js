//requirments 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var rentals = require('./routers/rentals.router.js');
var sales = require('./routers/sale.router.js');
var port = process.env.PORT || 5000;

//middleware
app.use(bodyParser.json());
app.use(express.static('server/public'));

//router routes
app.use('/sale', sales);
app.use('/rental', rentals);

//mongoose
var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/realestate';

mongoose.connection.on('connected', function(){
    console.log('we got a mongoose');
});

mongoose.connect(databaseUrl);

//start
app.listen(port, function(){
    console.log('listening on port: ', port);
});