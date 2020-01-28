var express = require('express');
var app = express();
var serviceStatus = require('./routes/serviceStatus')
var intervelService = require('./models/serviceIntervels')

app.use('/service_status', serviceStatus)
intervelService.serviceStatus()

app.listen(4000, function () {
    console.log("Server is running on 4000 port");
});
