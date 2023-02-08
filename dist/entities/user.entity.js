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
exports.UserData = void 0;
var typeorm_1 = require("typeorm");
var shipping_entity_1 = require("./shipping.entity");
var checkout_entity_1 = require("./checkout.entity");
var UserData = /** @class */ (function () {
    function UserData() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], UserData.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], UserData.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return shipping_entity_1.Shipping; }, function (shipping) { return shipping.user; }),
        __metadata("design:type", shipping_entity_1.Shipping)
    ], UserData.prototype, "shipping", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return checkout_entity_1.Checkout; }, function (checkout) { return checkout.user; }),
        __metadata("design:type", checkout_entity_1.Checkout)
    ], UserData.prototype, "checkout", void 0);
    UserData = __decorate([
        (0, typeorm_1.Entity)()
    ], UserData);
    return UserData;
}());
exports.UserData = UserData;
