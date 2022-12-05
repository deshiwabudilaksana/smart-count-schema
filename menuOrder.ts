import mongoose, { Schema } from "mongoose";

interface IMenuOrderModel extends mongoose.Document {
  menuRef: string;
  dailyYieldRef: string;
  amount: number;
  date: Date;
}

const menuOrderSchema = new Schema(
  {
    menuRef: {
      type: String,
      ref: "Menu",
      required: true,
    },
    dailyYieldRef: {
      type: String,
      ref: "DailyYield",
      required: true,
    },
    amount: {
      type: Number,
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

menuOrderSchema.index({ createdAt: 1, updatedAt: 1 });

const MenuOrderModel = mongoose.model<IMenuOrderModel>(
  "MenuOrder",
  menuOrderSchema,
  "MenuOrder"
);

export { IMenuOrderModel, MenuOrderModel };
