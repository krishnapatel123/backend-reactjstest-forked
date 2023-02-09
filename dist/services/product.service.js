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
exports.getAllProductList = exports.addProduct = void 0;
var data_source_1 = require("../data-source");
var product_entity_1 = require("../entities/product.entity");
var color_entity_1 = require("../entities/color.entity");
var size_entity_1 = require("../entities/size.entity");
var brand_entity_1 = require("../entities/brand.entity");
var gender_entity_1 = require("../entities/gender.entity");
var category_entity_1 = require("../entities/category.entity");
var categoryProductList = [
    {
        productName: "Louis Vouiton active wear",
        imageSource: "/images/womenproduct1.png",
        productCurrentPrice: 715,
        productOriginalPrice: 1000,
        isLike: false,
        isNewArrival: true,
        genderId: 1,
        brandId: 4,
        categoryId: 2,
        sizeId: 1,
        colorId: 3,
        productDesc: "Product description 1",
        reviewRate: 3,
        imageCollections: [
            "/images/blackdress1.png",
            "/images/blackdress2.png",
            "/images/blackdress3.png",
            "/images/blackdress4.png",
            "/images/blackdress5.png",
            "/images/blackdress1.png",
        ],
    },
    {
        productName: "Shiny dress Givenchy",
        imageSource: "/images/womenproduct2.png",
        productCurrentPrice: 600,
        productOriginalPrice: 890,
        isLike: true,
        isNewArrival: true,
        genderId: 1,
        brandId: 2,
        categoryId: 4,
        sizeId: 2,
        colorId: 2,
        productDesc: "Product description",
        reviewRate: 2,
        imageCollections: [
            "/images/blackdress1.png",
            "/images/blackdress2.png",
            "/images/blackdress3.png",
            "/images/blackdress4.png",
            "/images/blackdress5.png",
            "/images/blackdress1.png",
        ],
    },
    {
        productName: "Red dress Valentino",
        imageSource: "/images/womenproduct8.png",
        productCurrentPrice: 711,
        productOriginalPrice: 910,
        isLike: false,
        isNewArrival: true,
        genderId: 3,
        brandId: 5,
        categoryId: 1,
        sizeId: 3,
        colorId: 4,
        productDesc: "Product description 1",
        reviewRate: 5,
        imageCollections: [
            "/images/blackdress1.png",
            "/images/blackdress2.png",
            "/images/blackdress3.png",
            "/images/blackdress4.png",
            "/images/blackdress5.png",
            "/images/blackdress1.png",
        ],
    },
    {
        productName: "Shiny dress Givenchy",
        imageSource: "/images/womenproduct9.png",
        productCurrentPrice: 711,
        productOriginalPrice: 910,
        isLike: false,
        isNewArrival: true,
        genderId: 3,
        brandId: 7,
        categoryId: 1,
        sizeId: 3,
        colorId: 7,
        productDesc: "Product description 1",
        reviewRate: 4,
        imageCollections: [
            "/images/blackdress1.png",
            "/images/blackdress2.png",
            "/images/blackdress3.png",
            "/images/blackdress4.png",
            "/images/blackdress5.png",
            "/images/blackdress1.png",
        ],
    },
    {
        productName: "Dolce&Gabbana Dress ",
        imageSource: "/images/womenproduct3.png",
        productCurrentPrice: 711,
        productOriginalPrice: 910,
        isLike: false,
        isNewArrival: true,
        genderId: 4,
        brandId: 8,
        categoryId: 2,
        sizeId: 1,
        colorId: 3,
        productDesc: "Product description 1",
        reviewRate: 4,
        imageCollections: [
            "/images/blackdress1.png",
            "/images/blackdress2.png",
            "/images/blackdress3.png",
            "/images/blackdress4.png",
            "/images/blackdress5.png",
            "/images/blackdress1.png",
        ],
    },
    {
        productName: "Elegant dress Dries van Noten ",
        imageSource: "/images/womenproduct4.png",
        productCurrentPrice: 711,
        productOriginalPrice: 910,
        isLike: false,
        isNewArrival: true,
        genderId: 2,
        brandId: 5,
        categoryId: 1,
        sizeId: 3,
        colorId: 2,
        productDesc: "Product description 1",
        reviewRate: 4,
        imageCollections: [
            "/images/blackdress1.png",
            "/images/blackdress2.png",
            "/images/blackdress3.png",
            "/images/blackdress4.png",
            "/images/blackdress5.png",
            "/images/blackdress1.png",
        ],
    },
    {
        productName: "Women's white jacket",
        imageSource: "/images/womenproduct5.png",
        productCurrentPrice: 230,
        productOriginalPrice: 650,
        isLike: false,
        isNewArrival: true,
        genderId: 3,
        brandId: 9,
        categoryId: 1,
        sizeId: 2,
        colorId: 7,
        productDesc: "Product description 1",
        reviewRate: 4,
        imageCollections: [
            "/images/blackdress1.png",
            "/images/blackdress2.png",
            "/images/blackdress3.png",
            "/images/blackdress4.png",
            "/images/blackdress5.png",
            "/images/blackdress1.png",
        ],
    },
    {
        productName: "Black Valentino dress with tulle",
        imageSource: "/images/womenproduct6.png",
        productCurrentPrice: 230,
        productOriginalPrice: 650,
        isLike: false,
        isNewArrival: true,
        genderId: 1,
        brandId: 7,
        categoryId: 1,
        sizeId: 1,
        colorId: 3,
        productDesc: "Product description 1",
        reviewRate: 4,
        imageCollections: [
            "/images/blackdress1.png",
            "/images/blackdress2.png",
            "/images/blackdress3.png",
            "/images/blackdress4.png",
            "/images/blackdress5.png",
            "/images/blackdress1.png",
        ],
    },
    {
        productName: "Women's black vest Gucci",
        imageSource: "/images/womenproduct7.png",
        productCurrentPrice: 230,
        productOriginalPrice: 650,
        isLike: false,
        isNewArrival: true,
        genderId: 1,
        brandId: 3,
        categoryId: 1,
        sizeId: 3,
        colorId: 2,
        productDesc: "Product description 1",
        reviewRate: 4,
        imageCollections: [
            "/images/blackdress1.png",
            "/images/blackdress2.png",
            "/images/blackdress3.png",
            "/images/blackdress4.png",
            "/images/blackdress5.png",
            "/images/blackdress1.png",
        ],
    },
];
var addProduct = function () { return __awaiter(void 0, void 0, void 0, function () {
    var colorRepo, allColor, allColorIds, sizeRepo, allSize, allSizeIds;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                colorRepo = data_source_1.myDataSource.getRepository(color_entity_1.Color);
                return [4 /*yield*/, colorRepo.find({ select: { id: true } })];
            case 1:
                allColor = _a.sent();
                allColorIds = [];
                allColor.map(function (v) {
                    allColorIds.push(v.id);
                });
                sizeRepo = data_source_1.myDataSource.getRepository(size_entity_1.Size);
                return [4 /*yield*/, sizeRepo.find({ select: { id: true } })];
            case 2:
                allSize = _a.sent();
                allSizeIds = [];
                allSize.map(function (v) {
                    allSizeIds.push(v.id);
                });
                categoryProductList.map(function (productObj, index) { return __awaiter(void 0, void 0, void 0, function () {
                    var productRepository, product, brandRepository, brandData, genderRepository, genderData, categoryRepository, categoryData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                productRepository = data_source_1.myDataSource.getRepository(product_entity_1.Product);
                                product = new product_entity_1.Product();
                                brandRepository = data_source_1.myDataSource.getRepository(brand_entity_1.Brand);
                                return [4 /*yield*/, brandRepository.findOne({ where: { id: productObj.brandId } })];
                            case 1:
                                brandData = _a.sent();
                                console.log("brand data : ", brandData);
                                genderRepository = data_source_1.myDataSource.getRepository(gender_entity_1.Gender);
                                return [4 /*yield*/, genderRepository.findOne({ where: { id: productObj.genderId } })];
                            case 2:
                                genderData = _a.sent();
                                console.log("gender data : ", genderData);
                                categoryRepository = data_source_1.myDataSource.getRepository(category_entity_1.Category);
                                return [4 /*yield*/, categoryRepository.findOne({ where: { id: productObj.categoryId } })];
                            case 3:
                                categoryData = _a.sent();
                                console.log("category data : ", categoryData);
                                product.name = productObj.productName;
                                product.imageMedia = productObj.imageSource;
                                product.currentPrice = productObj.productCurrentPrice;
                                product.originalPrice = productObj.productOriginalPrice;
                                product.gender = genderData;
                                product.brand = brandData;
                                product.category = categoryData;
                                product.colorId = allColorIds;
                                product.sizeId = allSizeIds;
                                product.isLike = productObj.isLike;
                                product.isNewArrival = productObj.isNewArrival;
                                product.description = productObj.productDesc;
                                product.reviewRate = productObj.reviewRate;
                                product.imageCollections = productObj.imageCollections;
                                return [4 /*yield*/, productRepository.save(product)];
                            case 4:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); };
exports.addProduct = addProduct;
var getAllProductList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var productRepository, allProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productRepository = data_source_1.myDataSource.getRepository(product_entity_1.Product);
                return [4 /*yield*/, productRepository.find({ relations: { brand: true, gender: true, category: true } })];
            case 1:
                allProduct = _a.sent();
                console.log("allproduct : ", allProduct);
                return [2 /*return*/, allProduct];
        }
    });
}); };
exports.getAllProductList = getAllProductList;
