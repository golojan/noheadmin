import mongoose from "mongoose";

import Pages from "./pages";
import Admins from "./admins";

const { MONGOOSE_URI } = process.env;

export const dbCon = async () => {
  const conn = await mongoose
    .connect(MONGOOSE_URI)
    .then(() => { })
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");
  return { conn, Pages, Admins };
};
