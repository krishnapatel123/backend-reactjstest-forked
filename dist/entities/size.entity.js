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
exports.Size = void 0;
var typeorm_1 = require("typeorm");
var orderItems_entity_1 = require("./orderItems.entity");
var Size = /** @class */ (function () {
    function Size() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Size.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Size.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Size.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return orderItems_entity_1.OrderItems; }, function (orderItems) { return orderItems.size; }),
        __metadata("design:type", orderItems_entity_1.OrderItems)
    ], Size.prototype, "orderItemDetails", void 0);
    Size = __decorate([
        (0, typeorm_1.Entity)()
    ], Size);
    return Size;
}());
exports.Size = Size;
