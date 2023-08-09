import jwt from "jsonwebtoken";
import { prisma } from "../services";
require("dotenv").config();

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw new Error();

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (!user) return res.status(401).end();

    delete user.password;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication required" });
  }
};

export default isAuthenticated;
