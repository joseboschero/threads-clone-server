import { Router } from "express";
import { userRegister } from "../../controller/authentication/register.controller";

const registerRouter = Router();

registerRouter.post("/", userRegister);

export default registerRouter;
