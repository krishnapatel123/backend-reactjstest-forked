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
exports.Color = void 0;
var typeorm_1 = require("typeorm");
var product_entity_1 = require("./product.entity");
var Color = /** @class */ (function () {
    function Color() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Color.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Color.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_entity_1.Product; }, function (product) { return product.color; }, { cascade: true }),
        __metadata("design:type", Array)
    ], Color.prototype, "products", void 0);
    Color = __decorate([
        (0, typeorm_1.Entity)()
    ], Color);
    return Color;
}());
exports.Color = Color;