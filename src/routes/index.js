import isAuthenticated from "../middlewares/isAuthenticated";
import { registerRoutes, loginRoutes } from "./authentication";

const { Router } = require("express");
const router = Router();

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/test", isAuthenticated, (req, res) => res.status(200).send("ok"));

export default router;
