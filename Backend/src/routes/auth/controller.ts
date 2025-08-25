import { Request, Response } from "express";
import { prisma } from "../products/controller";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // simple validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "Required field missing" });
    }

    // check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
      },
    });

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
};

export const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // simple validation
    if (!email || !password) {
      return res.status(400).json({ message: "Required field missing" });
    }

    const findUser = await prisma.user.findUnique({ where: { email } });
    if (!findUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isEqual = await bcrypt.compare(password, findUser.password);
    if (!isEqual) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey123";
    const token = jwt.sign(
      {
        id: findUser.id,
        firstName: findUser.firstName,
        lastName: findUser.lastName,
        email,
        role: findUser.role,
      },
      JWT_SECRET,
      { expiresIn: "3d" }
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
};

export const logOut = async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
  });
  return res.status(200).json({ message: "Logged out successfully" });
};
