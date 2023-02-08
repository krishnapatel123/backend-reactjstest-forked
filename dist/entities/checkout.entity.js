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
exports.Checkout = exports.paymentMethodList = void 0;
var paymentMethodList;
(function (paymentMethodList) {
    paymentMethodList["CARD"] = "credit/debitCard";
    paymentMethodList["PAYPAL"] = "paypal";
    paymentMethodList["BITCOIN"] = "bitcoin";
})(paymentMethodList = exports.paymentMethodList || (exports.paymentMethodList = {}));
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var Checkout = /** @class */ (function () {
    function Checkout() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Checkout.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Checkout.prototype, "userId", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: paymentMethodList,
            default: paymentMethodList.CARD
        }),
        __metadata("design:type", String)
    ], Checkout.prototype, "paymentMethod", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Checkout.prototype, "cardName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Checkout.prototype, "cardNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' }),
        __metadata("design:type", String)
    ], Checkout.prototype, "expiration", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Checkout.prototype, "cvvCode", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.UserData; }, function (userData) { return userData.checkout; }, { cascade: true }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", user_entity_1.UserData)
    ], Checkout.prototype, "user", void 0);
    Checkout = __decorate([
        (0, typeorm_1.Entity)()
    ], Checkout);
    return Checkout;
}());
exports.Checkout = Checkout;
