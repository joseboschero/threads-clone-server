import jwt from "jsonwebtoken";
require("dotenv").config();

const signToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
};

export default signToken;
