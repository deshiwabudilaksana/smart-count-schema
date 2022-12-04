import crs from "crypto-random-string";

export const randomString = (length = 10) => crs({ length });
