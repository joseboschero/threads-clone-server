import { registerRoutes, loginRoutes } from "./authentication";

const { Router } = require("express");
const router = Router();

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);

export default router;
