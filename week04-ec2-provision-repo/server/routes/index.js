var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

router.get('/foo', function(request, response) {
    var message = { 'result': 'success', 'status': 'bar', 'file': 'api.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/create-educate', function(request, response) {
    var message = { 'result': 'Educate success' };
    console.log('CreateEducate called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/create-standard', function(request, response) {
    var message = { 'result': 'Standard success' };
    console.log('AwsStandard called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/associate-elastic-ip', function(request, response) {
    var message = { 'result': 'Associate success' };
    console.log('AssociateElasticIp called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;
