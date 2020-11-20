import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.JWTSECRET || "somethingsecret",
      (err, decode) => {
        if (err) res.json({ success: false, error: err.message }).status(400);
        req.user = decode;
        console.log(decode);
        return next();
      }
    );
  } else {
    return res.json({ success: false, msg: "Invalid Token" }).status(400);
  }
};

export const generateToken = ({ _id, email, role }) => {
  return jwt.sign(
    {
      _id: _id,
      email: email,
      role: role,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role == "Admin") {
    next();
  } else {
    return res.status(401).send({ message: "Invalid Admin Token" });
  }
};

export function notFound(req: Request, res: Response, _: any) {
  return res.status(404).send({ message: "You are lost!" });
}
