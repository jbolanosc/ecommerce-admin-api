import { Request, Response } from "express";
import AdminUser from "../db/models/AdminUser";
import { successResponse, errorResponse } from "../common";

export async function createUser(req: Request, res: Response) {
  try {
    const newUser = new AdminUser({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      temp_verification_code: "",
    });

    await newUser.save();

    return res.json(successResponse("User Created!")).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { _id } = req.params;

    await AdminUser.findByIdAndUpdate(_id, { $set: req.body }, { new: true });

    return res.json(successResponse("User Updated!")).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const { _id } = req.params;

    const user = await AdminUser.findById(_id);

    return res.json(successResponse(user)).status(200);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { _id } = req.params;

    await AdminUser.findByIdAndDelete(_id);

    const msg = "User Deleted!";

    return res.json(errorResponse(msg)).status(500);
  } catch (err) {
    return res.json(errorResponse(err.message)).status(500);
  }
}
