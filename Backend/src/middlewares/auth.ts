import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey123";
  try {
    const jwtToken = req.cookies.token;
    if (!jwtToken) {
      return res.status(400).json({ message: "unauth" });
    }

    const user = jwt.verify(jwtToken, JWT_SECRET);
    console.log(user);
    return res.sendStatus(200);

    // req.user =  {
    //     id: user.id,
    //     firstName: findUser.firstName,
    //     lastName: findUser.lastName,
    //     email,
    //     role: findUser.role,
    //   };
  } catch (error) {
    return res.status(400).json({ message: "unauth" });
  }
};
