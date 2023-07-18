const { Router } = require("express");

const router = Router();

router.use("/", (req, res) => res.status(200).send("OK"));

export default router;
