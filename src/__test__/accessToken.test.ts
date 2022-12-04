import { randomString } from "./helper/randomizer";
import { AccessToken, IAccessTokenModel } from "../model/accessToken";
import { composeMongoose } from "graphql-compose-mongoose";

it("should console accessToken", async () => {
  const token: Partial<IAccessTokenModel> = {
    accessToken: "thisToken123",
    active: true,
    userRef: "thisUser123",
    expireAt: new Date(),
  };

  console.log(token);
});
