import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";

const server = express();

const corsOptions = {
  origin: process.env.CORS,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cors(corsOptions));

server.use("/", router);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
