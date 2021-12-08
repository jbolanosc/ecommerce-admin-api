import AdminUser from "../db/models/AdminUser";
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import {
  hashPasswordSync,
  passwordCompareSync,
  errorResponse,
  successResponse,
  notFound,
  generateToken,
} from "../common";

const authRouter = express.Router();

authRouter.use(isValidPassword);
authRouter.post("/signup", hashPassword, signUp);
authRouter.post("/login", findByEmail, verifyPassword, login);
authRouter.use(notFound);

function isValidPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password || password.length < 6) {
    const errMsg = "password is too short";
    return res.json(errorResponse(errMsg)).status(400);
  }
  return next();
}

function hashPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  req.body.password = hashPasswordSync(password);
  return next();
}

function signUp(req: Request, res: Response) {
  const newUser = new AdminUser({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });
  return newUser.save((err, data) => {
    if (err) return res.json(errorResponse(err.toString())).status(400);

    const { _id, email, role } = data;
    return successResponse(data);
  });
}

function findByEmail(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  AdminUser.findOne({ email }, "+password", { lean: true }, (err, data) => {
    if (err || !data) return errorResponse(err.toString());
    req.body = { unhashedPassword: password, ...data };
    return next();
  });
}

function verifyPassword(req: Request, res: Response, next: NextFunction) {
  const { unhashedPassword, password, ...userData } = req.body;
  if (!passwordCompareSync(unhashedPassword, password)) {
    const errMsg = "Wrong usermane or password ";
    return res.json(errorResponse(errMsg)).status(400);
  }
  req.body = userData;
  return next();
}

function login(req: Request, res: Response) {
  const token = generateToken(req.body);
  return res.json(successResponse(token)).status(200);
}

export default authRouter;
