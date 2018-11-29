var express = require('express');
var router = express.Router();

/* GET home page. */

const check = (request, response, next) => {
    console.log('REQUEST CHECK CALLED', request.query);
    const validOptions = ['CpuInfo', 'VersionCheck', 'uptime'];
    if (request.query.script) {
        console.log('INSIDE REQUEST SCRIPT');
        if (!validOptions.includes(request.query.script)) {
            console.log('INSIDE REQUEST INVALID OPTION');
            response.send({result: 'error', error: 'Invalid Option: ' + request.query.script, script: request.query.script});
            return;
        }
    }
    next();
};

router.use(check);

////Following need to be implemented
//router.get('/run-script', (request, response) => {...
    ///stuff from JsObjects});
//router.get('/run-system-tool', (request, response) => {..
   ///stuff from the /usr/bin directory on our system.});

    //on client this.dataEndPoints = ['/script-pusher/run-script?script=',
    // '/script-pusher/run-system-tool?script='];

    /*Calls to /script-pusher/run-script run code from JsObjects.
    Calls to /script-pusher/run-system-tool run system utilities.
    It's up to you to see how this simple array is used in the program
    to help sort out this problem.*/

//////Above need to be implemented

const spawn = require('child_process').spawn;

let allData = '';

const copyFile = () => {
    return new Promise(function(resolve, reject) {
        console.log('Copy to EC2', process.env.SETUP_LINUXBOX);

        const pushScript = spawn('scp', [
            process.env.SETUP_LINUXBOX + '/CpuInfo',
            'ec2-bc:/home/ubuntu'
        ]);

        pushScript.stdout.on('data', data => {
            console.log(`child stdout:\n${data}`);
            allData += 'PUSH-SCRIPT: ' + data;
            //console.log('PUSH', data);
        });

        pushScript.stderr.on('data', data => {
            console.log(`child stderr:\n${data}`);
            allData += 'PUSH-SCRIPT: ' + data;
            //console.error('PUSH', data);
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
