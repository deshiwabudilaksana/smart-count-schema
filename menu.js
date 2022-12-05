"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModel = exports.menuUnit = exports.menuType = void 0;
const mongoose_1 = __importStar(require("mongoose"));
var menuType;
(function (menuType) {
    menuType["FOOD"] = "FOOD";
    menuType["BEVERAGE"] = "BEVERAGE";
})(menuType || (menuType = {}));
exports.menuType = menuType;
var menuUnit;
(function (menuUnit) {
    menuUnit["GLASS"] = "GLASS";
    menuUnit["CUP"] = "CUP";
    menuUnit["SHOT"] = "SHOT";
    menuUnit["PLATE"] = "PLATE";
    menuUnit["BOWL"] = "BOWL";
})(menuUnit || (menuUnit = {}));
exports.menuUnit = menuUnit;
const menuSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: menuType,
        default: menuType.FOOD,
        required: true,
    },
    unit: {
        type: String,
        enum: menuUnit,
        default: menuUnit.PLATE,
        required: true,
    },
    menuPrice: Number,
}, { autoIndex: false });
menuSchema.index({ createdAt: 1, updatedAt: 1 });
const MenuModel = mongoose_1.default.model("Menu", menuSchema, "Menu");
exports.MenuModel = MenuModel;
