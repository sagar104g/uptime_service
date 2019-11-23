var exec = require('child_process').exec;
var express = require('express');
var app = express();
var config = require('./config');

function serviceUptimeStatus(service, cb){
    exec('nc -vz '+service.host+' '+service.port,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error == null) {
            console.log('exec error: ' + stderr);
            if(stderr.includes('succeeded!')){
                cb(null, stderr)
            }else{
                cb(stderr)
            }
        }else{
            cb(error)  
        }
    });
}

app.get('/:serviceName',function(req, res){
    if(config[req.params.serviceName]){
        serviceUptimeStatus(config[req.params.serviceName], function(err, result){
            if(err){
                res.status(404)
                res.send(err)
            }else{
                res.status(200)
                res.send(result)
            }
        })
    }
})

app.listen(4000, function () {
    console.log("Server is running on 4000 port");
});