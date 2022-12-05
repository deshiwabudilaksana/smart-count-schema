import mongoose, { Schema } from "mongoose";

interface IFoodSupplierModel extends mongoose.Document {
  supplierRef: string;
  foodMaterialRef: string;
}

const foodSupplierSchema = new Schema(
  {
    supplierRef: {
      type: String,
      ref: "Supplier",
      required: true,
    },
    foodMaterialRef: {
      type: String,
      ref: "FoodMaterial",
      required: true,
    },
  },
  { autoIndex: false }
);

foodSupplierSchema.index({ createdAt: 1, updateAt: 1 });

const FoodSupplierModel = mongoose.model<IFoodSupplierModel>(
  "FoodSupplier",
  foodSupplierSchema,
  "FoodSupplier"
);

export { IFoodSupplierModel, FoodSupplierModel };
