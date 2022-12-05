import mongoose, { Schema } from "mongoose";
import { Unit } from "./yield";

interface IYieldMaterialModel extends mongoose.Document {
  foodMaterialRef: string;
  yieldRef: string;
  materialAmount: number;
  unit: string;
}

const yieldMaterialSchema = new Schema(
  {
    foodMaterialRef: {
      type: String,
      ref: "FoodMaterial",
      required: true,
    },
    yieldRef: {
      type: String,
      ref: "Yield",
      required: true,
    },
    materialAmount: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      enum: Unit,
      default: Unit.GRAM,
      required: true,
    },
  },
  { autoIndex: false }
);

yieldMaterialSchema.index({ createdAt: 1, updatedAt: 1 });

const YieldMaterialModel = mongoose.model<IYieldMaterialModel>(
  "YieldMaterial",
  yieldMaterialSchema,
  "YieldMaterial"
);

export { IYieldMaterialModel, YieldMaterialModel };
