import express, { Request, Response } from "express";
import { notFound, isAdmin, isAuth } from "../common";
import {
  createRequest,
  getRequest,
  updateRequest,
  deleteRequest,
} from "../services/request.service";

const requestRouter = express.Router();

requestRouter
  .get("/:_id", isAuth, getRequest)
  .post("/", isAuth, createRequest)
  .put("/:_id", isAuth, updateRequest)
  .delete("/:_id", isAuth, deleteRequest)
  .use(notFound);

export default requestRouter;
