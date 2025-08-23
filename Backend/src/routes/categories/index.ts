import { Router, Request, Response } from "express";
import { prisma } from "../products/controller";

const app = Router();

app.post("/", async (req: Request, res: Response) => {
  const { name, descreption } = req.body;

  if (!name || !descreption) {
    res.status(500).send({ massage: "must field all the inputs " });
  }

  try {
    const data = await prisma.categorie.create({
      data: {
        name,
        descreption,
      },
    });
    res.status(201).json({ categories: data });
  } catch (error) {
    res.sendStatus(501);
  } finally {
    prisma.$disconnect();
  }
});

export default app;
