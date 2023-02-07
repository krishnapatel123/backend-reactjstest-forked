"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data_source_1 = require("./data-source");
function loggerMiddleware(request, response, next) {
    console.log("".concat(request.method, " ").concat(request.path));
    next();
}
var staticRouter = require("./routes/static.route");
var main = function () {
    data_source_1.myDataSource
        .initialize()
        .then(function () {
        console.log('Data Source has been initialized!');
    })
        .catch(function (err) {
        console.error('Error during Data Source initialization:', err);
    });
    var app = express();
    app.use(loggerMiddleware);
    app.use(express.json());
    app.use(staticRouter);
    app.get('/', function (req, res) {
        res.send('hello world');
    });
    app.listen(3000);
};
main();
