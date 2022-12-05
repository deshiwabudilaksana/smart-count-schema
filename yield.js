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
exports.YieldModel = exports.Unit = void 0;
const mongoose_1 = __importStar(require("mongoose"));
var Unit;
(function (Unit) {
    Unit["GRAM"] = "GRAM";
    Unit["LITER"] = "LITER";
    Unit["KILOGRAM"] = "KILOGRAM";
    Unit["BOWL"] = "BOWL";
    Unit["BOTTLE"] = "BOTTLE";
})(Unit || (Unit = {}));
exports.Unit = Unit;
const yieldSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        enum: Unit,
        default: Unit.GRAM,
        required: true,
    },
}, { autoIndex: false });
yieldSchema.index({ createdAt: 1, updatedAt: 1 });
const YieldModel = mongoose_1.default.model("Yield", yieldSchema, "Yield");
exports.YieldModel = YieldModel;
