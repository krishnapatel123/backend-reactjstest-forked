"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
var gender_entity_1 = require("./entities/gender.entity");
var brand_entity_1 = require("./entities/brand.entity");
var category_entity_1 = require("./entities/category.entity");
var size_entity_1 = require("./entities/size.entity");
var product_entity_1 = require("./entities/product.entity");
var color_entity_1 = require("./entities/color.entity");
var shipping_entity_1 = require("./entities/shipping.entity");
var user_entity_1 = require("./entities/user.entity");
var checkout_entity_1 = require("./entities/checkout.entity");
exports.myDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT) || parseInt("5432"),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "123",
    database: process.env.DB_DATABASE || "shopping_db",
    entities: [gender_entity_1.Gender, brand_entity_1.Brand, category_entity_1.Category, size_entity_1.Size, product_entity_1.Product, color_entity_1.Color, shipping_entity_1.Shipping, user_entity_1.UserData, checkout_entity_1.Checkout],
    logging: true,
    synchronize: true,
});
