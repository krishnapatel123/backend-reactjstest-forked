"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var brand_entity_1 = require("./brand.entity");
var category_entity_1 = require("./category.entity");
var gender_entity_1 = require("./gender.entity");
var orderItems_entity_1 = require("./orderItems.entity");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Product.prototype, "imageMedia", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: 0,
            type: "int"
        }),
        __metadata("design:type", Number)
    ], Product.prototype, "currentPrice", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "int",
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Product.prototype, "originalPrice", void 0);
    __decorate([
        (0, typeorm_1.Column)('simple-array', { nullable: false }),
        __metadata("design:type", Array)
    ], Product.prototype, "sizeId", void 0);
    __decorate([
        (0, typeorm_1.Column)('simple-array', { nullable: false }),
        __metadata("design:type", Array)
    ], Product.prototype, "colorId", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: false,
            type: "boolean"
        }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "isLike", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: false,
            type: "boolean"
        }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "isNewArrival", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: 0,
            type: "int"
        }),
        __metadata("design:type", Number)
    ], Product.prototype, "reviewRate", void 0);
    __decorate([
        (0, typeorm_1.Column)('simple-array', { nullable: false }),
        __metadata("design:type", Array)
    ], Product.prototype, "imageCollections", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return brand_entity_1.Brand; }, function (brand) { return brand.products; }, {
            cascade: true,
        }),
        __metadata("design:type", brand_entity_1.Brand)
    ], Product.prototype, "brand", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return category_entity_1.Category; }, function (category) { return category.products; }, {
            cascade: true,
        }),
        __metadata("design:type", category_entity_1.Category)
    ], Product.prototype, "category", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return gender_entity_1.Gender; }, function (gender) { return gender.products; }, {
            cascade: true,
        }),
        __metadata("design:type", gender_entity_1.Gender)
    ], Product.prototype, "gender", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return orderItems_entity_1.OrderItems; }, function (orderItemDetails) { return orderItemDetails.product; }),
        __metadata("design:type", orderItems_entity_1.OrderItems)
    ], Product.prototype, "orderItemDetails", void 0);
    Product = __decorate([
        (0, typeorm_1.Entity)()
    ], Product);
    return Product;
}());
exports.Product = Product;
