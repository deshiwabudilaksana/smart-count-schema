import mongoose, { Schema } from "mongoose";
import { Unit } from "./yield";

interface IDailyYieldModel extends mongoose.Document {
  yieldRef: string;
  userRef: string;
  amount: number;
  unit: string;
  date: Date;
}

const dailyYieldSchema = new Schema(
  {
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
      enum: Unit,
      default: Unit.GRAM,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
      required: true,
    },
  },
  { autoIndex: false }
);

dailyYieldSchema.index({ createdAt: 1, updatedAt: 1 });

const DailyYieldModel = mongoose.model<IDailyYieldModel>(
  "DailyYield",
  dailyYieldSchema,
  "DailyYield"
);

export { IDailyYieldModel, DailyYieldModel };
