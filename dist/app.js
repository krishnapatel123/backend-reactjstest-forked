"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data_source_1 = require("./data-source");
var gender_route_1 = require("./routes/gender.route");
var brand_route_1 = require("./routes/brand.route");
var category_route_1 = require("./routes/category.route");
var size_route_1 = require("./routes/size.route");
function loggerMiddleware(request, response, next) {
    console.log("".concat(request.method, " ").concat(request.path));
    next();
}
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
    app.use(loggerMiddleware);
    app.use(express.json());
    app.use('/gender', gender_route_1.default);
    app.use('/brand', brand_route_1.default);
    app.use('/category', category_route_1.default);
    app.use('/size', size_route_1.default);
    // app.get('/static', staticRouter);
    app.get('/', function (req, res) {
        res.send('hello world');
    });
    app.listen(3000);
};
main();
