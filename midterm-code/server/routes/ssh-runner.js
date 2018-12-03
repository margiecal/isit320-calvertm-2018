var express = require('express');
var router = express.Router();
const spawn = require('child_process').spawn;

let allData = '';
let versionData = '';

const runMyLocalTool = (request, response) => {
    return new Promise(function(resolve, reject) {
        var myScript = '';

        if (request.query.script === 'uptime') {
            console.log('uptime   ', '/usr/bin/uptime');
            myScript = spawn('/usr/bin/uptime');

        } else if (request.query.script === 'CpuInfo') {
            myScript = spawn(process.env.SETUP_LINUXBOX + '/CpuInfo');

        } else if (request.query.script === 'VersionCheck') {
            myScript = spawn(process.env.SETUP_LINUXBOX + '/VersionCheck');
        }

        myScript.stdout.on('data', data => {
            console.log(`child stdout:\n${data}`);

            versionData = data;
            allData += 'PUSH-SCRIPT: ' + data;
            console.log('AllData', allData);
        });

        myScript.stderr.on('data', data => {
            console.log(`child stderr:\n${data}`);
            allData += 'PUSH-SCRIPT: ' + data;
            console.error('allData', allData);
        });

        myScript.on('close', code => {
            resolve({
                result: 'success',
                allData: allData,
                code: code
            });
        });

        myScript.on('error', code => {
            reject({
                result: 'error',
                allData: allData,
                code: code
            });
        });
    });
};

const copyFile = () => {
    return new Promise(function(resolve, reject) {
        console.log('Copy to EC2', process.env.SETUP_LINUXBOX);

        const pushScript = spawn('scp', [
            process.env.SETUP_LINUXBOX + '/CpuInfo',
            'ec2-bc:/home/ubuntu'
        ]);

        pushScript.stdout.on('data', data => {
            console.log(`child stdout:\n${data}`);

            console.log('PUSH', data);
        });

        pushScript.stderr.on('data', data => {
            console.log(`child stderr:\n${data}`);

            console.error('PUSH', data);
        });

        pushScript.on('close', code => {
            resolve({
                result: 'success',
                code: code
            });
        });

        pushScript.on('error', code => {
            reject({
                result: 'error',
                code: code
            });
        });
    });
};

router.get('/run-system-tool', (request, response) => {
    'use strict';
    //response.send(Result: 'success'});

    runMyLocalTool(request, response)
        .then(result => {
            console.log(
                'This is from the server: ' + JSON.stringify(allData, null, 4)
            );
            response.send(result);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
});

router.get('/copy-file', function(request, response) {
    'use strict';
    //response.send(Result: 'success'});

    copyFile()
        .then(result => {
            console.log(
                'This is from the server: ' + JSON.stringify(result, null, 4)
            );
            response.send(result);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
});

module.exports = router;
