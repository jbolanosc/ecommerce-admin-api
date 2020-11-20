import express from "express";
import { notFound, isAdmin, isAuth } from "../common";
import { updateUser, getUser, deleteUser } from "../services/user.service";

const userRouter = express.Router();

userRouter
  .get("/:_id", isAuth, getUser)
  .put("/:_id", isAuth, isAdmin, updateUser)
  .delete("/:_id", isAuth, isAdmin, deleteUser)
  .use(notFound);

export default userRouter;
