var express = require('express');
var router = express.Router();
const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
const createInstance = require('./aws/AwsPromise');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

router.get('/foo', function(request, response) {
  var message = { 'result': 'success', 'status': 'bar', 'file': 'api.js' };
  console.log('Foo called:\n' + JSON.stringify(message, null, 4));
  response.send(message);
});

router.get('/create-educate', function(request, response) { 'use strict';
    var message = { 'result': 'success'};
    const awsInstanceParams = getAwsInstanceParams.awsCharlie();
    createInstance(awsInstanceParams);
    response.send(message);
});

module.exports = router;