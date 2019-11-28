var express = require('express');
var router = express.Router();
var service = require('../models/serviceStatus')
var config = require('../config/config')

router.get('/:serviceName',function(req, res){
    if(config[req.params.serviceName]){
        service.serviceStatus(config[req.params.serviceName], function(err, result){
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

module.exports = router