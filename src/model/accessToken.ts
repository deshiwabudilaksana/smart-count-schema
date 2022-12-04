import mongoose, { Schema } from "mongoose";

interface IAccessTokenModel extends mongoose.Document {
  accessToken: string;
  active: boolean;
  userRef: string;
  expireAt: Date;
}

const accessTokenSchema = new Schema(
  {
    accessToken: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    userRef: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
    },
  },
  { timestamps: true, autoIndex: false }
);

accessTokenSchema.index({ expireAt: 1 }, { expires: 1 });

const AccessToken = mongoose.model<IAccessTokenModel>(
  "AccessToken",
  accessTokenSchema,
  "AccessToken"
);

export { AccessToken, IAccessTokenModel };
