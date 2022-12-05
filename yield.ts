import mongoose, { Schema } from "mongoose";

interface IYieldModel extends mongoose.Document {
  name: string;
  unit: string;
}

enum Unit {
  GRAM = "GRAM",
  LITER = "LITER",
  KILOGRAM = "KILOGRAM",
  BOWL = "BOWL",
  BOTTLE = "BOTTLE",
}

const yieldSchema = new Schema(
  {
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
  },
  { autoIndex: false }
);

yieldSchema.index({ createdAt: 1, updatedAt: 1 });

const YieldModel = mongoose.model<IYieldModel>("Yield", yieldSchema, "Yield");

export { IYieldModel, Unit, YieldModel };
