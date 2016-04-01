var express = require('express');
var router = express.Router();
var path = require('path');
var Heros = require('../models/heros.js');

router.get('/hero', function(req, res){
    Heros.find({}, function(err, data){
        if(err){ console.log(err); }
        res.send(data);
    });
});

router.post('/hero', function(req, res){
    var newHero = new Hero({
        'alias': req.body.alias,
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'city': req.body.city,
        'power_name': req.body.power_name
    });

    newHero.save(function(err, data){
        if(err){ console.log(err); }
        res.send(data);
    });
});

router.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
