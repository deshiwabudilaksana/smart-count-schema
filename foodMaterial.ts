import mongoose, { Schema } from "mongoose";

interface IFoodMaterialModel extends mongoose.Document {
  name: string;
  unit: string;
}

enum FoodUnitMeasure {
  Kilogram = "KG",
  Gram = "GR",
  Litre = "LT",
  Mililitre = "ML",
  CC = "CC",
}

const foodMaterialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      enum: FoodUnitMeasure,
      required: true,
    },
  },
  { autoIndex: false }
);

foodMaterialSchema.index({ createdAt: 1, updatedAt: 1 });

const FoodMaterialModel = mongoose.model<IFoodMaterialModel>(
  "FoodMaterial",
  foodMaterialSchema,
  "FoodMaterial"
);

export { IFoodMaterialModel, FoodUnitMeasure, FoodMaterialModel };
