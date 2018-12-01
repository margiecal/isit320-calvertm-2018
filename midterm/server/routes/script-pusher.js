var express = require('express');
var router = express.Router();
const Client = require('ssh2').Client;

const hostAddress = '18.236.24.112';
const localhostAddress = '127.0.0.1';
const spawn = require('child_process').spawn;

let allData = '';


const check = (request, response, next) => {
    console.log('REQUEST CHECK CALLED', request.query);
    const validOptions = ['CpuInfo', 'VersionCheck', 'uptime'];
    if (request.query.script) {
        console.log('INSIDE REQUEST SCRIPT');
        if (!validOptions.includes(request.query.script)) {
            console.log('INSIDE REQUEST INVALID OPTION');
            response.send({
                result: 'error',
                error: 'Invalid Option: ' + request.query.script,
                script: request.query.script
            });
            return;
        }
    }
    next();
};

router.use(check);

/**router.get('/run-system-tool', (request, response) => {
    console.log("THIS IS RUN SYSTEM TOOL");
    return new Promise(function (resolve, reject) {
        var pushScript = '';
        allData = '';

        if (request.query.script === "uptime") {
            console.log('uptime   ', '/usr/bin/uptime');
            pushScript = spawn('/usr/bin/uptime');
        } else if (request.query.script === "CpuInfo") {
            pushScript = spawn(process.env.SETUP_LINUXBOX + '/CpuInfo');
        } else if (request.query.script === "VersionCheck") {
            pushScript = spawn(process.env.SETUP_LINUXBOX + '/VersionCheck');
        }


        pushScript.stdout.on('data', data => {
            console.log(`child stdout:\n${data}`);
            allData += 'PUSH-SCRIPT: ' + data;
            //console.log('PUSH', data);
        });

        pushScript.stderr.on('data', data => {
            console.log(`child stderr:\n${data}`);
            allData += 'PUSH-SCRIPT: ' + data;
            response.send({result: 'success', allData: allData});
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




/*
    myScript.stdout.on('data', (data) => {
        console.log(` stdout on data:\n${data}`);

        allData = '${data}';
        console.log("My response:  " + allData);
    });

    myScript.stderr.on('data', (data) => {
        console.error(`uptime stderr:\n${data}`);
        allData = data;
    });

*/






const runVersionCheck = (hostAddress, response) => {
    var conn = new Client();
    conn.on('ready', function () {
        console.log('Client :: ready');
        conn.exec('~/VersionCheck', function (err, stream) {
            if (err) throw err;
            stream
                .on('close', function (code, signal) {
                    console.log(
                        'Stream :: close :: code: ' +
                        code +
                        ', signal: ' +
                        signal
                    );
                    conn.end();
                    response.send({result: 'success', allData: allData});
                })
                .on('data', function (data) {
                    console.log('STDOUT: ' + data);
                    allData += data;
                })
                .stderr.on('data', function (data) {
                console.log('STDERR: ' + data);
                allData += data;
            });
        });
    }).connect({
        host: hostAddress,
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/EC2Fall2018.pem'
        )
    });
};

const runCpuInfo = (hostAddress, response) => {
    var conn = new Client();
    conn.on('ready', function () {
        console.log('Client :: ready');
        conn.exec('~/CpuInfo', function (err, stream) {
            if (err) throw err;
            stream
                .on('close', function (code, signal) {
                    console.log(
                        'Stream :: close :: code: ' +
                        code +
                        ', signal: ' +
                        signal
                    );
                    conn.end();
                    response.send({result: 'success', allData: allData});
                })
                .on('data', function (data) {
                    console.log('STDOUT: ' + data);
                    allData += data;
                })
                .stderr.on('data', function (data) {
                console.log('STDERR: ' + data);

            });
        });
    }).connect({
        host: hostAddress,
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/EC2Fall2018.pem'
        )
    });
};

const runUptime = (hostAddress, response) => {
    var conn = new Client();
    conn.on('ready', function () {
        console.log('Client :: ready');
        conn.exec('/usr/bin/uptime', function (err, stream) {
            if (err) throw err;
            stream
                .on('close', function (code, signal) {
                    console.log(
                        'Stream :: close :: code: ' +
                        code +
                        ', signal: ' +
                        signal
                    );
                    conn.end();
                    response.send({result: 'success', allData: allData});
                })
                .on('data', function (data) {
                    console.log('STDOUT: ' + data);
                    allData += data;
                })
                .stderr.on('data', function (data) {
                console.log('STDERR: ' + data);
                allData += data;
            });
        });
    }).connect({
        host: hostAddress,
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/EC2Fall2018.pem'
        )
    });
};

router.get('/run-script', (request, response) => {
    console.log('Request query script in run-script  ' + request.query.script);

    if (request.query.script === 'CpuInfo') {
        console.log('INSIDE RUN SCRIPTnnn CPUnn Info');

        runCpuInfo(hostAddress, response);
    }

    else if (request.query.script === 'VersionCheck') {
        console.log('INSIDE RUN SCRIPTnnn VersionChecknn');

        runVersionCheck(hostAddress, response);
    }

    else if (request.query.script === 'uptime') {
        console.log('INSIDE RUN SCript uptimemmm');

        runUptime(hostAddress, response);
    }

});


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


const copyFile = () => {
    return new Promise(function (resolve, reject) {
        console.log('Copy to EC2', process.env.SETUP_LINUXBOX);

        const pushScript = spawn('scp', [
            process.env.SETUP_LINUXBOX + '/CpuInfo',
            'ec2-bc:/home/ubuntu'
        ]);

        pushScript.stdout.on('data', data => {
            console.log(`child stdout:\n${data}`);

            //console.log('PUSH', data);
        });

        pushScript.stderr.on('data', data => {
            console.log(`child stderr:\n${data}`);

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

const runMyLocalTool = (request, response) => {
    return new Promise(function (resolve, reject) {

        var myScript = '';


        if (request.query.script === "uptime") {
            console.log('uptime   ', '/usr/bin/uptime');
            myScript = spawn('/usr/bin/uptime');
        } else if (request.query.script === "CpuInfo") {
            myScript = spawn(process.env.SETUP_LINUXBOX + '/CpuInfo');
        } else if (request.query.script === "VersionCheck") {
            myScript = spawn(process.env.SETUP_LINUXBOX + '/VersionCheck');
        }

        myScript.stdout.on('data', data => {
            console.log(`child stdout:\n${data}`);
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


router.get('/copy-file', function (request, response) {
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
