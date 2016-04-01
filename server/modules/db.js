var mongoose = require('mongoose');

var mongoURI = 'mongodb://localhost/herodb';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
    console.log('Error connecting. err = ', err);
});

MongoDB.on('open', function(){
    console.log('DB connection is now open');
});
