import { Router } from "express";
import { getAllThreads } from "../../controller/threads/threads.controller";

const threadsRouter = Router();

threadsRouter.get("/", getAllThreads);

export default threadsRouter;
