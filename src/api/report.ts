import express from "express";
import { notFound, isAdmin, isAuth } from "../common";
import {
  createReport,
  updateReport,
  getReport,
  deleteReport,
} from "../services/report.service";

const reportRouter = express.Router();

reportRouter
  .get("/:_id", isAuth, getReport)
  .post("/", isAuth, createReport)
  .put("/:_id", isAuth, updateReport)
  .delete("/:_id", isAuth, deleteReport)
  .use(notFound);

export default reportRouter;
