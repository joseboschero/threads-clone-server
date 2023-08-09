import isAuthenticated from "../middlewares/isAuthenticated";
import { registerRoutes, loginRoutes } from "./authentication";
import threadsRouter from "./threads/threads.routes";

const { Router } = require("express");
const router = Router();

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/threads", threadsRouter);
router.use("/test", isAuthenticated, (req, res) => res.status(200).send(req.user));

export default router;
