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
exports.OrderItems = void 0;
var typeorm_1 = require("typeorm");
var orderDetails_entity_1 = require("./orderDetails.entity");
var product_entity_1 = require("./product.entity");
var color_entity_1 = require("./color.entity");
var size_entity_1 = require("./size.entity");
var OrderItems = /** @class */ (function () {
    function OrderItems() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], OrderItems.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 1 }),
        __metadata("design:type", Number)
    ], OrderItems.prototype, "quantity", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return orderDetails_entity_1.OrderDetails; }, function (orderDetails) { return orderDetails.orderItemDetails; }, {
            cascade: true,
        }),
        __metadata("design:type", orderDetails_entity_1.OrderDetails)
    ], OrderItems.prototype, "orderDetails", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_entity_1.Product; }, function (product) { return product.orderItemDetails; }, {
            cascade: true,
        }),
        __metadata("design:type", product_entity_1.Product)
    ], OrderItems.prototype, "product", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return color_entity_1.Color; }, function (color) { return color.orderItemDetails; }, {
            cascade: true,
        }),
        __metadata("design:type", color_entity_1.Color)
    ], OrderItems.prototype, "color", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return size_entity_1.Size; }, function (size) { return size.orderItemDetails; }, {
            cascade: true,
        }),
        __metadata("design:type", size_entity_1.Size)
    ], OrderItems.prototype, "size", void 0);
    OrderItems = __decorate([
        (0, typeorm_1.Entity)()
    ], OrderItems);
    return OrderItems;
}());
exports.OrderItems = OrderItems;
