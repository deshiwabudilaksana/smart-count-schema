import mongoose, { Schema } from "mongoose";

interface ISupplierModel extends mongoose.Document {
  name: string;
  phone: string;
  email: string;
  address: string;
}

const supplierSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { autoIndex: false }
);

supplierSchema.index({ createdAt: 1, updatedAt: 1 });

const SupplierModel = mongoose.model<ISupplierModel>(
  "Supplier",
  supplierSchema,
  "Supplier"
);

export { ISupplierModel, SupplierModel };
