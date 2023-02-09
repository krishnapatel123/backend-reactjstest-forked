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
exports.Shipping = void 0;
var typeorm_1 = require("typeorm");
var orderDetails_entity_1 = require("./orderDetails.entity");
var user_entity_1 = require("./user.entity");
var Shipping = /** @class */ (function () {
    function Shipping() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Shipping.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Shipping.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Shipping.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Shipping.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Shipping.prototype, "phoneNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' }),
        __metadata("design:type", String)
    ], Shipping.prototype, "deliveryDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'time' }),
        __metadata("design:type", String)
    ], Shipping.prototype, "convenientTime", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Shipping.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Shipping.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Shipping.prototype, "zipCode", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.UserData; }, function (userData) { return userData.shipping; }, {
            cascade: true,
        }),
        __metadata("design:type", user_entity_1.UserData)
    ], Shipping.prototype, "userData", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return orderDetails_entity_1.OrderDetails; }, function (shippingDetails) { return shippingDetails.shippingDetails; }),
        __metadata("design:type", Array)
    ], Shipping.prototype, "orderDetails", void 0);
    Shipping = __decorate([
        (0, typeorm_1.Entity)()
    ], Shipping);
    return Shipping;
}());
exports.Shipping = Shipping;
