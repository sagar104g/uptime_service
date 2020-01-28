var config = require('../config/config')
var serviceChecker = require('./serviceStatus')

var serviceStatus = function (){
    for(let service in config){
        serviceChecker.serviceIntervel(config[service], config[service].intervel)
    }
}
exports.serviceStatus = serviceStatus;

// var serviceStatus = function (){
//     let services = []
//     for(let service in config){
//         services.push(config[service])   
//     }
//     serviceChecker.serviceIntervel(services)
// }
// exports.serviceStatus = serviceStatus;
