import mongoose, { Schema } from "mongoose";

interface IMenuYieldModel extends mongoose.Document {
  yieldRef: string;
  menuRef: string;
  yieldAmount: number;
}

const menuYieldSchema = new Schema(
  {
    yieldRef: {
      type: String,
      ref: "Yield",
      required: true,
    },
    menuRef: {
      type: String,
      ref: "Menu",
      required: true,
    },
    yieldAmount: {
      type: Number,
      required: true,
    },
  },
  { autoIndex: false }
);

menuYieldSchema.index({ createdAt: 1, updatedAt: 1 });

const MenuYieldModel = mongoose.model<IMenuYieldModel>(
  "MenuYield",
  menuYieldSchema,
  "MenuYield"
);

export { IMenuYieldModel, MenuYieldModel };
