import mongoose, { Schema } from "mongoose";

interface IMenuModel extends mongoose.Document {
  name: string;
  type: string;
  unit: string;
}

enum menuType {
  FOOD = "FOOD",
  BEVERAGE = "BEVERAGE",
}

enum menuUnit {
  GLASS = "GLASS",
  CUP = "CUP",
  SHOT = "SHOT",
  PLATE = "PLATE",
  BOWL = "BOWL",
}

const menuSchema = new Schema(
  {
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
  },
  { autoIndex: false }
);

menuSchema.index({ createdAt: 1, updatedAt: 1 });

const MenuModel = mongoose.model<IMenuModel>("Menu", menuSchema, "Menu");

export { IMenuModel, menuType, menuUnit, MenuModel };
