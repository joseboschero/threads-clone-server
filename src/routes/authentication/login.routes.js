import { Router } from "express";
import { userLogin } from "../../controller/authentication/login.controller";

const loginRouter = Router();

loginRouter.post("/", userLogin);

export default loginRouter;
