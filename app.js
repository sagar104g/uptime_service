var express = require('express');
var app = express();
var serviceStatus = require('./routes/serviceStatus')


app.use('/service_status', serviceStatus)


app.listen(4000, function () {
    console.log("Server is running on 4000 port");
});