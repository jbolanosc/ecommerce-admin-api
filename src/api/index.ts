import authRouter from "./auth";
import reportRouter from "./report";
import userRouter from "./user";
import requestRouter from "./request";
import { notFound } from "../common";
import config from "../config";
import connect from "../db/connect";
import express, { Response, Request } from "express";

const router = express.Router();

connect(config.devMongoUrl);

router
  .get("/ping", (req: Request, res: Response) => {
    return res.json("pong");
  })
  .use("/auth", authRouter)
  .use("/request", requestRouter)
  .use("/report", reportRouter)
  .use("/user", userRouter)
  .use(notFound);

export default router;
