import { Router } from "express";
import {
  getAllThreads,
  postThread,
} from "../../controller/threads/threads.controller";

const threadsRouter = Router();

threadsRouter.get("/", getAllThreads);
threadsRouter.post("/", postThread);

export default threadsRouter;
