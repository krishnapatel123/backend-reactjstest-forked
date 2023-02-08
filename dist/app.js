"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data_source_1 = require("./data-source");
var index_route_1 = require("./routes/index.route");
var bodyParser = require('body-parser');
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
    app.use(function (err, req, res, next) {
        res.status(500).json({ message: err.message });
    });
    app.use('/uploads', express.static('./uploads'));
    app.use(bodyParser.json());
    app.use(express.json());
    app.use('/api', index_route_1.default);
    app.listen(3001);
};
main();
