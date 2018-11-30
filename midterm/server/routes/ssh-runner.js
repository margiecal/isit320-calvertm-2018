var express = require('express');
var router = express.Router();

let allData = '';





/**router.get('/run-script', (request, response) => {
    console.log('Request query script in run-script  ' + request.query.script);

    if (request.query.script === 'CpuInfo') {
        console.log('INSIDE RUN SCRIPT aa');
        runCpuInfo();

    }

});**/



const runUptime = (hostAddress, response) => {
    var conn = new Client();
    conn.on('ready', function() {
        console.log('Client :: ready');
        conn.exec('~/uptime', function(err, stream) {
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

module.exports = router;
