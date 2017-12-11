var express = require('express');
var compression = require('compression');

var init = function() {
    var app = express();
    app.use(compression());

	app.use(express.static('www', {}));


    console.log('Starting server...');
    var server = app.listen(process.env.WEB_PORT || process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log('Server listening on ' + port);
    });
};

init();
