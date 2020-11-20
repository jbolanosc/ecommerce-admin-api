import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { notFound } from "./common/";
import router from "./api";
const app: Application = express();

app
  .use(cors())
  .use(express.json())
  .use(morgan("dev"))
  .use("/api", router)
  .use(notFound);

export default app;
