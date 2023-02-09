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
exports.OrderDetails = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var shipping_entity_1 = require("./shipping.entity");
var checkout_entity_1 = require("./checkout.entity");
var orderItems_entity_1 = require("./orderItems.entity");
var OrderDetails = /** @class */ (function () {
    function OrderDetails() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], OrderDetails.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: 0,
            type: "int"
        }),
        __metadata("design:type", Number)
    ], OrderDetails.prototype, "total", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: function () { return "CURRENT_TIMESTAMP(6)"; } }),
        __metadata("design:type", Date)
    ], OrderDetails.prototype, "created_At", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.UserData; }, function (userData) { return userData.orderDetails; }, {
            cascade: true,
        }),
        __metadata("design:type", user_entity_1.UserData)
    ], OrderDetails.prototype, "userData", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return shipping_entity_1.Shipping; }, function (shippingDetails) { return shippingDetails.orderDetails; }, {
            cascade: true,
        }),
        __metadata("design:type", shipping_entity_1.Shipping)
    ], OrderDetails.prototype, "shippingDetails", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return checkout_entity_1.Checkout; }, function (checkoutDetails) { return checkoutDetails.orderDetails; }, {
            cascade: true,
        }),
        __metadata("design:type", checkout_entity_1.Checkout)
    ], OrderDetails.prototype, "checkoutDetails", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return orderItems_entity_1.OrderItems; }, function (orderItemDetails) { return orderItemDetails.orderDetails; }),
        __metadata("design:type", Array)
    ], OrderDetails.prototype, "orderItemDetails", void 0);
    OrderDetails = __decorate([
        (0, typeorm_1.Entity)()
    ], OrderDetails);
    return OrderDetails;
}());
exports.OrderDetails = OrderDetails;
