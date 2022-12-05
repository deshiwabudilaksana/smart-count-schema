import mongoose, { Schema } from "mongoose";

interface ISupplyOrderModel extends mongoose.Document {
  foodMaterialRef: string;
  supplierRef: string;
  userRef: string;
  orderDate: Date;
  amount: number;
  unit: string;
}

enum supplyOrderAmount {
  KILOGRAM = "KILOGRAM",
  LITER = "LITER",
  GRAM = "GRAM",
}

const supplyOrderSchema = new Schema(
  {
    foodMaterialRef: {
      type: String,
      ref: "FoodMaterial",
      required: true,
    },
    supplierRef: {
      type: String,
      ref: "Supplier",
      required: true,
    },
    userRef: {
      type: String,
      ref: "FoodMaterial",
      required: true,
    },
    orderDate: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      enum: supplyOrderAmount,
      default: supplyOrderAmount.GRAM,
      required: true,
    },
    buyPrice: Number,
  },
  { autoIndex: false }
);

supplyOrderSchema.index({ createdAt: 1, updatedAt: 1 });

const SupplyOrderModel = mongoose.model<ISupplyOrderModel>(
  "SupplyOrder",
  supplyOrderSchema,
  "SupplyOrder"
);

export { ISupplyOrderModel, SupplyOrderModel };
