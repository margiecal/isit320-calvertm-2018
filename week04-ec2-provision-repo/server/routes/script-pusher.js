var express = require('express');
var router = express.Router();



router.get('/copy-get-started', function(request, response) {
    var message = { 'result': 'CopyGetSTarted success'};
    console.log('CopyGetStarted called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/run-get-started', function(request, response) {
    var message = { 'result': 'RunGetStarted success' };
    console.log('RunGetStarted called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/remove-known-host', function(request, response) {
    var message = { 'result': 'RemoveKnownHost success' };
    console.log('Remove Known Host called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});



module.exports = router;