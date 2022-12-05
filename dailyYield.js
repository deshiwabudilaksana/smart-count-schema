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
exports.DailyYieldModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const yield_1 = require("./yield");
const dailyYieldSchema = new mongoose_1.Schema({
    yieldRef: {
        type: String,
        ref: "Yield",
        required: true,
    },
    userRef: {
        type: String,
        ref: "User",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        enum: yield_1.Unit,
        default: yield_1.Unit.GRAM,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    },
}, { autoIndex: false });
dailyYieldSchema.index({ createdAt: 1, updatedAt: 1 });
const DailyYieldModel = mongoose_1.default.model("DailyYield", dailyYieldSchema, "DailyYield");
exports.DailyYieldModel = DailyYieldModel;
