var exec = require('child_process').exec;

var serviceStatus = function (service, cb){
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
exports.serviceStatus = serviceStatus;