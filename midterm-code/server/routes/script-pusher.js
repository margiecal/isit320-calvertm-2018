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



module.exports = router;
