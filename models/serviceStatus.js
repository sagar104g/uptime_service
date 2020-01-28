var exec = require('child_process').exec;

var serviceStatus = function (service, cb){
    exec('nc -vz '+service.host+' '+service.port,
    function (error, stdout, stderr) {
        if (error == null) {
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

var serviceIntervel = function (service, intervel){
    setInterval(serviceStatus, intervel, service, function(err, res){
        if(err){
            var cmd = 'bash /home/ubuntu/uptime_service/alert.sh "'+service.serviceName+' service Down"';
            exec(cmd,function(err,stdout,stdin){});
        }else{
            console.log("success "+service.serviceName)
        }
    });
}
exports.serviceIntervel = serviceIntervel;

// var serviceIntervel = function (service){
//     var iterator = 0;
//     setInterval(function(){
//         if(iterator => service.length){
//             iterator = 0;
//         }
//         serviceStatus(service[iterator], function(err, res){
//             if(err){
//                 console.log("error")
//             }else{
//                 console.log("success")
//             }
//         })
//         iterator++;
//     }, 1000);
// }
// exports.serviceIntervel = serviceIntervel;
