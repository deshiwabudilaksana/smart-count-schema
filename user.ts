import mongoose, { Schema } from "mongoose";

interface IUserModel extends mongoose.Document {
  name: string;
  email: string;
  access: string;
}

enum AccessType {
  ADMIN = "ADMIN",
  STAFF = "STAFF",
  KITCHEN = "KITCHEN",
  BAR = "BAR",
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    access: {
      type: String,
      enum: AccessType,
      default: AccessType.STAFF,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
      required: true,
    },
    isRemoved: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true, autoIndex: false }
);

userSchema.index(
  { createdAt: 1 },
  { expires: "72h", partialFilterExpression: { verified: false } }
);

const UserModel = mongoose.model<IUserModel>("User", userSchema, "User");

export { IUserModel, UserModel, AccessType };
