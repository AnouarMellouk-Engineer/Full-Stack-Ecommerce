import { Request, Response, Router } from "express";
import { prisma } from "../products/controller";
const app = Router();

app.post("/", async (req: Request, res: Response) => {
  const { name, image } = req.body;

  if (!name || !image) {
    return res.sendStatus(400);
  }

  const isExist = await prisma.brand.findUnique({
    where: {
      name,
    },
  });

  if (isExist) {
    return res.sendStatus(400);
  }

  const brand = await prisma.brand.create({
    data: {
      name,
      image,
    },
  });
  return res.status(201).json({ message: "brand created OK", brand });
});

app.get("/", async (req: Request, res: Response) => {
  const brands = await prisma.brand.findMany();

  return res.status(201).json({ message: "get brands OK", brands });
});

export default app;
