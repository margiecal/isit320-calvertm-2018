var express = require('express');
var router = express.Router();

let allData = '';

/*
router.get('/run-system-tool', (request, response) => {
    console.log("THIS IS RUN SYSTEM TOOL");

    console.log('process.env   ', process.env);

});*/


/**router.get('/run-script', (request, response) => {
    console.log('Request query script in run-script  ' + request.query.script);

    if (request.query.script === 'CpuInfo') {
        console.log('INSIDE RUN SCRIPT aa');
        runCpuInfo();

    }

});**/




/**
router.get('/call-cpu-info', (request, response) => {
    console.log('cpu info called');
    runCpuInfo(hostAddress, response);
});

router.get('/call-version-check', (request, response) => {
    console.log('version check called');
    runVersionCheck(hostAddress, response);
});

router.get('/call-uptime', (request, response) => {
    console.log('uptime called');
    runUptime(hostAddress, response);
});
**/
module.exports = router;
