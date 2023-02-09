"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderDetails = exports.addOrderDetails = void 0;
var data_source_1 = require("../data-source");
var orderDetails_entity_1 = require("../entities/orderDetails.entity");
var orderItems_entity_1 = require("../entities/orderItems.entity");
var user_entity_1 = require("../entities/user.entity");
var shipping_entity_1 = require("../entities/shipping.entity");
var checkout_entity_1 = require("../entities/checkout.entity");
var product_entity_1 = require("../entities/product.entity");
var color_entity_1 = require("../entities/color.entity");
var size_entity_1 = require("../entities/size.entity");
var addOrderDetails = function (orderDetailsObj) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, userData, shippingRepository, shippingData, checkoutRepository, checkoutData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userRepository = data_source_1.myDataSource.getRepository(user_entity_1.UserData);
                return [4 /*yield*/, userRepository.findOne({ where: { id: orderDetailsObj.userId } })];
            case 1:
                userData = _a.sent();
                shippingRepository = data_source_1.myDataSource.getRepository(shipping_entity_1.Shipping);
                return [4 /*yield*/, shippingRepository.findOne({ where: { id: orderDetailsObj.shippingId } })];
            case 2:
                shippingData = _a.sent();
                checkoutRepository = data_source_1.myDataSource.getRepository(checkout_entity_1.Checkout);
                return [4 /*yield*/, checkoutRepository.findOne({ where: { id: orderDetailsObj.checkoutId } })];
            case 3:
                checkoutData = _a.sent();
                return [4 /*yield*/, data_source_1.myDataSource
                        .createQueryBuilder()
                        .insert()
                        .into(orderDetails_entity_1.OrderDetails)
                        .values({
                        userData: userData,
                        shippingDetails: shippingData,
                        checkoutDetails: checkoutData,
                        total: orderDetailsObj.total
                    })
                        .execute().then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var lastInsertedOrderId, productRepository, productData, colorRepository, colorData, sizeRepository, sizeData;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    lastInsertedOrderId = res === null || res === void 0 ? void 0 : res.identifiers[0].id;
                                    productRepository = data_source_1.myDataSource.getRepository(product_entity_1.Product);
                                    return [4 /*yield*/, productRepository.findOne({ where: { id: orderDetailsObj.productId } })];
                                case 1:
                                    productData = _a.sent();
                                    colorRepository = data_source_1.myDataSource.getRepository(color_entity_1.Color);
                                    return [4 /*yield*/, colorRepository.findOne({ where: { id: orderDetailsObj.colorId } })];
                                case 2:
                                    colorData = _a.sent();
                                    sizeRepository = data_source_1.myDataSource.getRepository(size_entity_1.Size);
                                    return [4 /*yield*/, sizeRepository.findOne({ where: { id: orderDetailsObj.sizeId } })];
                                case 3:
                                    sizeData = _a.sent();
                                    return [4 /*yield*/, data_source_1.myDataSource.createQueryBuilder().insert().into(orderItems_entity_1.OrderItems).values({
                                            orderDetails: lastInsertedOrderId,
                                            product: productData,
                                            quantity: orderDetailsObj.quantity,
                                            color: colorData,
                                            size: sizeData,
                                        }).execute().then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                console.log("after save obj : ", res);
                                                return [2 /*return*/, res];
                                            });
                                        }); })];
                                case 4:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.addOrderDetails = addOrderDetails;
var getOrderDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
    var orderDetails;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data_source_1.myDataSource.getRepository(orderDetails_entity_1.OrderDetails)
                    .createQueryBuilder("orderDetails")
                    .innerJoinAndSelect("orderDetails.orderItemDetails", "orderItemDetails")
                    .innerJoinAndSelect("orderDetails.userData", "userData")
                    .innerJoinAndSelect("orderDetails.shippingDetails", "shippingDetails")
                    .innerJoinAndSelect("orderDetails.checkoutDetails", "checkoutDetails")
                    .leftJoinAndSelect("orderItemDetails.size", "size")
                    .leftJoinAndSelect("orderItemDetails.color", "color")
                    .getOne()];
            case 1:
                orderDetails = _a.sent();
                return [2 /*return*/, orderDetails];
        }
    });
}); };
exports.getOrderDetails = getOrderDetails;
