import { Router } from "express";
import { getAllThreads } from "../../controller/threads/threads.controller";
import { postThreads } from "../../controller/threads/threads.create";

const threadsRouter = Router();

threadsRouter.get("/", getAllThreads);
threadsRouter.post("/", postThreads);

export default threadsRouter;
