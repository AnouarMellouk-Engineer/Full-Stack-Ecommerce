import { Request, Response } from "express";
import { prisma } from "../products/controller";

export const getUses = async (req: Request, res: Response) => {
  try {
    const uses = await prisma.use.findMany();
    res.status(200).json({ message: "fetching data OK", uses });
  } catch (error) {
    res.status(500).json({ message: "get uses failed" });
  }
};

export const addUses = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;

    if (!description) {
      res.status(400).json({ message: "Invalid Description" });
    }
    const use = await prisma.use.create({
      data: {
        description,
      },
    });
    res.status(200).json({ message: "created use OK", use });
  } catch (error) {
    res.status(500).json({ message: "created use failed" });
  }
};
