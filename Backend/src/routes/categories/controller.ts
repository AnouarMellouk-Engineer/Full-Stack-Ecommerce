import { Request, Response } from "express";
import { prisma } from "../products/controller";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const data = await prisma.categorie.findMany();
    res.status(200).json({ categories: data });
  } catch (error) {
    res.sendStatus(501);
  }
};

export const addCategorie = async (req: Request, res: Response) => {
  const { name, descreption, image } = req.body;

  if (!name || !descreption || !image) {
    res.status(500).send({ massage: "must field all the inputs " });
  }

  try {
    const data = await prisma.categorie.create({
      data: {
        name,
        descreption,
        image,
      },
    });
    res.status(201).json({ categories: data });
  } catch (error) {
    res.sendStatus(501);
  }
};
