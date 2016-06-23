'use strict';
var e = require('express');
////import cors = require('cors');
var apiRoutes = require('./api/api.routes');
var api_config_1 = require('./api/api.config');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = e();
app
    .use(bodyParser.json())
    .use(e.static(__dirname + "/public"));
////.use('/api', cors());
apiRoutes.register(app, api_config_1.apiConfig);
app.use(function (req, res) {
    console.log("Not found '" + req.url + "'");
    res
        .type('text/plain')
        .status(404)
        .send('404 - Not Found');
});
app.listen(port, function () {
    console.log("This express app is listening on port: " + port);
});
//# sourceMappingURL=server.js.map