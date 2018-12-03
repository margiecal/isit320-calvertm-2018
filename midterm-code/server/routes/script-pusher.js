var express = require('express');
var router = express.Router();
const Client = require('ssh2').Client;

const hostAddress = '18.236.24.112';


let allData = '';
let myPath = '';

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

const runMyScript = (hostAddress, response) => {
    var conn = new Client();
    conn.on('ready', function() {
        console.log('Client :: ready');
        conn.exec(myPath, function(err, stream) {
            if (err) throw err;
            stream
                .on('close', function(code, signal) {
                    console.log(
                        'Stream :: close :: code: ' +
                            code +
                            ', signal: ' +
                            signal
                    );
                    conn.end();
                    response.send({ result: 'success', allData: allData });
                })
                .on('data', function(data) {
                    console.log('STDOUT: ' + data);
                    allData += data;
                })
                .stderr.on('data', function(data) {
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
        myPath = '~/CpuInfo';
        console.log('INSIDE RUN SCRIPT CPU Info');

        runMyScript(hostAddress, response);

    } else if (request.query.script === 'VersionCheck') {
        myPath = '~/VersionCheck';
        console.log('INSIDE RUN SCRIPT VersionCheck');

        runMyScript(hostAddress, response);

    } else if (request.query.script === 'uptime') {
        allData = '';
        myPath = '/usr/bin/uptime';
        console.log('INSIDE RUN SCript uptime');

        runMyScript(hostAddress, response);
    }
});

module.exports = router;
